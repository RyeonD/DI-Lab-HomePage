import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Viewer } from '@toast-ui/react-editor';
const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth:'1000px',
        margin:'10px auto',

    }
}))
const Post = ({match, location}) => {
    const classes = useStyles()
    const editorRef = React.createRef();
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [files, setFiles] = useState([]);
    useEffect(()=>{
        if(location.state){
            setContents(<Viewer initialValue = {location.state.contents}/>)
            setTitle(location.state.title)
        }else{
            axios.get('/api/posts/post',{
                params:{
                    post_id:match.params.post_id    
                }
            })
            .then(res => {
                setContents(<Viewer initialValue = {res.data.result[0].contents}/>)
                setTitle(res.data.result[0].title)
            })
        }
        axios.get('/api/posts/files',{
            params: { 
                post_id:match.params.post_id
        }})
        .then(res => {
            console.log(res.data.result)
            if(res.data.result.length){
                setFiles(res.data.result)
            }
        })
    },[])
    return (
        <div className={classes.root}>
            <h1>{title}</h1>
            <article>{contents}</article>
            {files.map((file, i) => (
                <a href = {`/${file.file_path}`} download key = {i}> {file.file_name} </a>
            ))}
        </div>
    )
}

export default Post
