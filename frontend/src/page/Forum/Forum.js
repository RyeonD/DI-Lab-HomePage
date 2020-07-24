import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {Table, TableBody, TableCell, 
        TableContainer, TableHead, TableRow,
        Paper, Button} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';


import moment from 'moment';
import 'moment/locale/ko'

import axios from 'axios';
import { useContextState } from '../../Context';

const useStyles = makeStyles((theme) => ({
    wrapper:{
        height: 'calc(100% - 56px)',
        '@media (min-width: 0px) and  (orientation: landscape)' : {
            height: `calc(100% - 48px)`
        },
        '@media (min-width:600px)': {
            height: `calc(100% - 64px)`
        },
        overflow:'auto',
    },
    '@media screen and (max-width: 600px)': {
        table:{display:'none'},
        root:{display:'inherit'}
    },
    '@media screen and (min-width: 601px)': {
        root:{display:'none'},
        table:{display:'inherit'}
    },
    table:{
        maxWidth:'1000px',
        margin:'10px auto',
        minHeight:'1117px'
    },
    customPage:{
        width:'fit-content',
        margin:'10px auto'
    },
    user:{
        width:'120px'
    },
    date:{
        width:'120px'
    },
    tableContents:{
        maxWidth:'100px',
        overflow:'hidden',
        whiteSpace:'nowrap',
        textOverflow:'ellipsis'
    },
    root: {
        margin:'10px auto',
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        '-webkitLineClamp':'1',
        '-webkitBoxOrient': 'vertical',
        display: '-webkit-box',
        overflow: 'hidden'
    },
    functions:{
        margin:'10px auto',
        width: 'fit-content'
    }
}));

const Forum = ({ match, location}) => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [forumAuth, setForumAuth] = useState(0);
    const classes = useStyles();
    const {login, userAuth, forumList} = useContextState()
    const {category} = match.params
    const getPosts = () => {
        axios.get('/api/posts/posts',{
            params: {
                category:category,
                from_number:0,
            }
        }).then( res => {
            setPosts(res.data.result);
            setPageCount(Math.ceil(res.data.count / 20))
        });
    }
    useEffect(() => {
        getPosts()
    },[])
    useEffect(() => {
        getPosts()
        const currentForum = forumList.filter(forum => forum.category === category)
        if(currentForum.length !== 0){
            if(currentForum[0].required_auth && login){
                if(userAuth){ setForumAuth(true) }
                else{         setForumAuth(false) }}
            else{ setForumAuth(login) }
        }
    },[category, forumList, login, userAuth])
    const handlePage = (e, value) => {
        setPage(value);
        axios.get('/api/posts/posts',{
            params:{ 
                category:category,
                from_number:(value-1) * 20
            }
        }).then(res => {
            setPosts(res.data.result)
            document.getElementById('forum').scrollTo({top:0,behavior:'smooth'})
        })
    }
    return (
        <div className = {classes.wrapper} id ='forum'>
            <List className={classes.root}>
                {posts.map((row,i) => (
                    <React.Fragment key = {i}>
                        <NavLink to = {{
                                pathname: `/forum/${category}/${row.post_id}/post`
                            }}>

                        <ListItem alignItems = "flex-start" button>
                            <ListItemText primary   = {row.title}
                                          secondary = {
                                <>
                                    <Typography component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary">
                                        {row.contents}
                                    </Typography>
                                    {row.user_name}  {`${moment(row.date).fromNow()}`}
                                </>
                            }/>
                        </ListItem>
                        </NavLink>                        

                        <Divider/>
                    </React.Fragment >
                ))}
            </List>
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align = "center">제목</TableCell>
                        <TableCell className = {classes.user} 
                                align = "center">작성자</TableCell>
                        <TableCell className = {classes.date} 
                                align = "center">날짜</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {posts.map((row,i) => (
                        <TableRow key={i}>
                        <TableCell className={classes.tableContents}component="th" scope="row" align="left">
                            <NavLink to = {{
                                pathname: `/forum/${category}/${row.post_id}/post`
                            }}>
                                {row.title}
                            </NavLink>
                        </TableCell>
                        <TableCell align="center">{row.user_name}</TableCell>
                        <TableCell align="right">{`${moment(row.date).format('YYYY MMMM Do')}`}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination className = {classes.customPage}
                        count     = {pageCount} 
                        size      = "small" 
                        page      = {page}
                        color     = "primary"
                        onChange  = {handlePage} 
                        showLastButton 
                        showFirstButton/>
            <div className={classes.functions}>
                {forumAuth ? 
                <NavLink to = {{
                    pathname: `/forum/${category}/addPost`,
                    state:{
                        category: category
                    }
                }}>
                    <Button className = {classes.button}
                            color     = "primary"
                            variant   = "outlined">
                        글쓰기
                    </Button>
                </NavLink>
                :null}
            </div>
        </div>
    )
}

export default Forum
