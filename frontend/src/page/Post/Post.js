import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Divider } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import FileSaver from 'file-saver';
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import { useContextState, useContextDispatch } from '../../Context';
const useStyles = makeStyles((theme) => ({
    root:{
        width:'80%',
        minHeight:'700px',
        maxWidth:'1000px',
        margin:'10px auto',
        overflowWrap: 'break-word'
    },
    paper: {
        width:'450px',
        height:'200px'
    },
    button: {
        marginRight: theme.spacing(2),
    },
    downloadLink: {
        cursor: 'pointer'
    }
}))
const Post = ({history, match, location}) => {
    const classes = useStyles()
    const { userAuth }= useContextState()
    const [postObject, setPostObject] = useState('');
    const [contents, setContents] = useState('');
    const [files, setFiles] = useState([]);
    const [open, setOpen] = useState(false);
    const [openFiles, setOpenFiles] = useState(false);
    const openFileDialog = () => {
        setOpenFiles(true)
    }
    const closeFileDialog = () => {
        setOpenFiles(false)
    }
    const openDialog = () => {
        setOpen(true)
    }
    const closeDialog = () => {
        setOpen(false)
    }
    useEffect(()=>{
        axios.get('/api/posts/post',{
            params:{
                post_id:match.params.post_id    
            }
        })
        .then(res => {
            console.log(res)
            setContents(<Viewer initialValue = {res.data.result[0].contents}/>)
            setPostObject(res.data.result[0])
            setFiles(res.data.files)
        })
    },[])
    const removePost = () => {
        axios.delete('/api/posts/post',{
            params:{
                post_id:match.params.post_id,
                files: files.map((file)=> file.file_path)
            }
        })
        .then(res => {
            history.replace(`/forum/${match.params.category}`)
        })
    }
    const allDown = async () => {
        axios.get('/api/posts/filesDownload',{
            params:{
                post_id:match.params.post_id    
            },
            responseType:'blob'
        }).then(res => {
            FileSaver.saveAs(res.data, 'files.zip')
        })
    }
    const downloadFile = (file) => {
        axios.get('/api/posts/fileDownload',{
            params:{
                file_path: file.file_path
            },
            responseType:'blob'
        }).then(res => {
            console.log(res)
            FileSaver.saveAs(res.data, file.file_name)
        })
    }
    return (
        <div className={classes.root}>
            <h1>{postObject.title}</h1>
            {userAuth !== 0 && (userAuth.authority === 1 || userAuth.id === postObject.user_id) ? 
            <>
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
                    onClick   = {openDialog}
                    variant   = "outlined">
                remove
            </Button>
            </>
            : null
            }
            {files.length ? 
            <Button className = {classes.button}
                    color     = "primary"
                    onClick   = {openFileDialog}
                    variant   = "outlined">
                files
            </Button>
            :null
            }
            <Dialog open            = {openFiles}
                    maxWidth        = 'sm'
                    fullWidth       = {true}
                    onClose         = {closeFileDialog}
                    aria-labelledby = "max-width-dialog-title">
                <DialogTitle id="max-width-dialog-title">
                    File Download
                </DialogTitle>
                <DialogContent>
                    <div className = {classes.downloadLink}
                         onClick   = {allDown}>
                             일괄 다운로드
                    </div>
                    <Divider/>
                    {files.map((file, i) => (
                        <React.Fragment key = {i}>
                            <div className = {classes.downloadLink}
                                 onClick   = {(e) => {downloadFile(file)}}>
                                    {file.file_name} 
                            </div>
                            <Divider/>
                        </React.Fragment>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button 
                        color     = "primary"
                        onClick   = {closeFileDialog}
                        variant   = "outlined">
                        cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open            = {open}
                    maxWidth        = 'sm'
                    fullWidth       = {true}
                    onClose         = {closeDialog}
                    aria-labelledby = "max-width-dialog-title">
                <DialogTitle id="max-width-dialog-title">
                    정말 삭제하시겠습니까?
                </DialogTitle>
                <DialogContent>
                    삭제한 게시물은 복구가 불가능 합니다.
                </DialogContent>
                <DialogActions>
                    <Button className = {classes.button}
                        color     = "secondary"
                        onClick   = {removePost}
                        variant   = "outlined">
                        remove
                    </Button>
                    <Button 
                        color     = "primary"
                        onClick   = {closeDialog}
                        variant   = "outlined">
                        cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <article>{contents}</article>
        </div>
    )
}

export default Post
