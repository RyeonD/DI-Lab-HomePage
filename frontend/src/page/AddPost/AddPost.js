import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { toast } from 'react-toastify'

import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
const useStyles = makeStyles((theme) => ({
    editorRoot:{
        width:'80%',
        margin:'10px auto'
    },
    title:{
        width:'100%'
    }
}))
const AddPost = ({match, location}) => {
    const editorRef = React.createRef();
    const classes = useStyles()
    const [contents, setContents] = useState('');
    console.log(match)
    console.log(location)
    const throwErrorMessage = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
        });
    }
    const validate = () => {
        if(!document.getElementById('title').value){
            throwErrorMessage('제목이 비었습니다!')
            return false
        }
        if(!editorRef.current.getInstance().getMarkdown()){
            throwErrorMessage('내용이 비었습니다!')
            return false
        }
        return true
    }
    const addPost = (e) => {
        if(validate()){
            axios.post('/api/posts/post',{
                title     : document.getElementById('title').value,
                contents  : editorRef.current.getInstance().getMarkdown(),
                category  : 'lecture',
                user_name : '김종원',
                user_id   : 201413286
            })
            .then((res) => {
                console.log(res)
            }).catch( err => {
                console.log(err)
            })
        }
    }
    return (
        <div className = {classes.editorRoot}>
            <TextField className = {classes.title} 
                       id        = "title" 
                       label     = "Title" 
                       variant   = "filled" />
            <Editor initialValue       = {contents}
                    previewStyle       = "vertical"
                    height             = "600px"
                    initialEditType    = "wysiwyg"
                    ref                = {editorRef}
                    useCommandShortcut = {true}/>
            <Button color   = "primary"
                    variant = "contained"
                    onClick = {addPost}>
                    save
            </Button>
        </div>
    )
}

export default AddPost
