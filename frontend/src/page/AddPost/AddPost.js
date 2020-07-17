import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';
import { toast } from 'react-toastify'
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

const AddPost = ({history, location, match}) => {
    const editorRef = React.createRef();
    const classes = useStyles();
    const [contents, setContents] = useState('');
    const [fileList, setFileList] = useState([]);
    const [params, setParams] = useState(new FormData());
    useEffect(()=>{
        editorRef.current.getInstance().getUI().getToolbar().removeItem(15)
    },[])
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
            params.append('title',     document.getElementById('title').value)
            params.append('contents',  editorRef.current.getInstance().getMarkdown())
            params.append('category',  'lecture')
            params.append('user_name', '김종원')
            params.append('user_id',   201413286)
            axios.post('/api/posts/post',params,
            { headers : 
                {'Content-Type': "multipart/form-data; boundary=''"}
            })
            .then((res) => {
                history.push('/forum/lecture')
            }).catch( err => {
                console.log(err)
            })
        }
    }
    const handleFile = async (e) => {
        const files = new FormData();
        const fileNames = []
        Object.values(e.target.files).forEach(item=>{
            fileNames.push(item.name)
            files.append('files', item)
        })
        setFileList(fileNames)
        setParams(files)
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
                    placeholder        = "Please enter text."
                    ref                = {editorRef}
                    useCommandShortcut = {true}
                    />
            <Button color   = "primary"
                    variant = "contained"
                    onClick = {addPost}>
                    save
            </Button>
            <Button color     = "primary"
                    component = "label"
                    variant   = "contained" >
                    Upload File
                <input type     = "file" 
                       id       = "rase"
                       onChange = {handleFile} 
                       multiple 
                       style    = {{display:'none'}}/>
            </Button>
            {fileList.length ? 
                <Typography variant="h6" className={classes.title}>
                    Files: {fileList.length}
                </Typography>:''}
            <List dense={false}>
              {fileList.map((filename,i) =>(
                <ListItem key = {i}>
                  <ListItemText
                    primary = {filename}
                  />
                </ListItem>
              ))}
            </List>
        </div>
    )
}

export default AddPost