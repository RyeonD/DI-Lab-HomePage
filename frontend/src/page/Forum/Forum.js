import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

import moment from 'moment';
import 'moment/locale/ko'

import axios from 'axios';
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
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        zIndex:'-1'
    },
    inline: {
        display: 'inline',
    },
}));

const Forum = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const classes = useStyles();

    useEffect(() => {
        axios.get('/api/posts/posts',{
            params: {
                category:'lecture',
                from_number:0,
            }
        }).then( res => {
            console.log(res);
            setPosts(res.data.result);
            setPageCount(Math.ceil(res.data.count / 20))
        });
    }, [])
    const handlePage = (e, value) => {
        setPage(value);
        axios.get('/api/posts/posts',{
            params:{
                category:'lecture',
                from_number:(value-1) * 20
            }
        }).then(res => {
            console.log(res)
            setPosts(res.data.result)
            document.getElementById('forum').scrollTo({top:0,behavior:'smooth'})
            
        })
    }
    return (
        <div className = {classes.wrapper} id ='forum'>
            {/* <List className={classes.root}>
                {posts.map((row,i) => (
                    <>
                    <ListItem alignItems = "flex-start" key = {i}>
                        <ListItemText
                        primary={row.title}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                                >
                                {row.user_name}
                                </Typography>
                                {' ' + row.contents}
                                </React.Fragment>
                            }
                            />
                            </ListItem>
                            <Divider/>
                            </>
                            ))}
                        </List> */}
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
                                pathname: `/forum/lecture/${row.post_id}`,
                                state:row
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
                        size      = "large" 
                        page      = {page}
                        color     = "primary"
                        onChange  = {handlePage} 
                        showLastButton 
                        showFirstButton/>
            <NavLink to = {{
                pathname: `/forum/lecture/addPost`,
                state:{
                    category: 'lecture'
                }
            }}>
                <Fab color      = "primary" 
                     size       = "small"
                     aria-label = "add">
                    <AddIcon />
                </Fab>
            </NavLink>
        </div>
    )
}

export default Forum
