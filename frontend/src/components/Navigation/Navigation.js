import React, { useState, useMemo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import axios from 'axios';
import './styles.scss'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    '@media screen and (max-width: 600px)' : {
        navButton:{display:'none'},
        menuButton:{display:'inline-flex'}
    },
    navButton: {
        marginRight: theme.spacing(2),
    },
    sideBarButton:{
        width:'100%',
        marginRight: theme.spacing(2),
    },
    '@media screen and (min-width: 601px)' : {
        menuButton:{display:'none'}
    },
    title: {
        flexGrow: 1,
    },
    sideBar:{
        width:250
    }
}));

const MenuList = React.memo(({locationFlag}) => {
    const classes = useStyles();
    const callApi = ()=>{
        axios.get('/api/user/userInfo').then( res => {
            console.log(res)
        })
    }
    const menuItems = [
        {menuName:'연구실'}, 
        {menuName:'구성원'}, 
        {menuName:'프로젝트'}, 
        {menuName:'게시판'}, 
        {menuName:'Login',clickEvent:callApi}]
    return (
        <>
            {menuItems.map((item,i) => (
                <Button className={locationFlag ? classes.sideBarButton: classes.navButton} color="inherit" key = {i} onClick={item.clickEvent}>
                    {item.menuName}
                </Button>
            ))}
        </>
    )
})
const Navigation = () => {
    const classes = useStyles();
    const [toggleFlag, setToggleFlag] = useState(false)
    const toggleDrawer = useCallback(e => {
        setToggleFlag(!toggleFlag)
    },[toggleFlag])

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className='toolbar'>
                    <Typography variant="h6" className={classes.title}>
                        DI Lab
                    </Typography>
                    <MenuList/>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor='right' open={toggleFlag} onClose = {toggleDrawer}>
                        <div className={classes.sideBar}>
                            <MenuList locationFlag = {true}/>
                        </div>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default React.memo(Navigation)
