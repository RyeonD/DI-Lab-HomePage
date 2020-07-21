import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Viewer } from '@toast-ui/react-editor';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'80%',
        maxWidth:'1000px',
        margin:'10px auto',
    },
    button: {
        marginRight: theme.spacing(2),
    }
}))
const Post = ({match, location}) => {
    const classes = useStyles()
    const editorRef = React.createRef();
    const [postObject, setPostObject] = useState('');
    const [contents, setContents] = useState('');
    const [files, setFiles] = useState([]);
    useEffect(()=>{
        if(location.state){
            setContents(<Viewer initialValue = {location.state.contents}/>)
            setPostObject(location.state)
        }else{
            axios.get('/api/posts/post',{
                params:{
                    post_id:match.params.post_id    
                }
            })
            .then(res => {
                setContents(<Viewer initialValue = {res.data.result[0].contents}/>)
                setPostObject(res.data.result[0])
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
    const removePost = () => {
        axios.delete('/api/posts/post',{
            params:{
                post_id:match.params.post_id    
            }
        })
        .then(res => {
            console.log(res)
            // setContents(<Viewer initialValue = {res.data.result[0].contents}/>)
            // setPostObject(res.data.result[0])
        })
    }
    return (
        <div className={classes.root}>
            <h1>{postObject.title}</h1>
            <NavLink to = {{
                pathname: `/forum/${postObject.category}/addPost`,
                state: {...postObject, editFlag:true}
            }}>
                <Button className = {classes.button}
                        color     = "primary"
                        variant   = "outlined">
                    edit
                </Button>
            </NavLink>
            <Button className = {classes.button}
                    color     = "secondary"
                    onClick   = {removePost}
                    variant   = "outlined">
                remove
            </Button>
            <article>{contents}</article>
            {files.map((file, i) => (
                <a href = {`/${file.file_path}`} download key = {i}> {file.file_name} </a>
            ))}
        </div>
    )
}

export default Post
