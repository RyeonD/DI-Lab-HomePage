import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { MenuItem, Menu, AppBar, Toolbar, 
        Typography, Button, IconButton,  
        Drawer, List, ListItem, ListItemText,
        Collapse, Dialog, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useHistory } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import axios from 'axios';

import Login from '../Login/Login';
import { useContextState, useContextDispatch } from '../../Context';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative'
    },
    '@media screen and (max-width: 600px)': {
        navButton: { display: 'none' },
        menuButton: { display: 'inline-flex' },
        dialogCon: { width: '100%' }
    },
    navButton: {
        marginRight: theme.spacing(2),
    },
    sideBarButton: {
        width: '100%',
        marginRight: theme.spacing(2),
    },
    '@media screen and (min-width: 601px)': {
        menuButton: { display: 'none' },
        dialogCon: { width: '450px'}
    },
    title: {
        flexGrow: 1,
    },
    sideBar: {
        width: 250
    },
    noDecoration: {
        color: 'inherit',
        textDecoration: 'none',
        '&::visited': {
            color: 'inherit',
            textDecoration: 'none',
        }
    },
    dialog : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));
const StyledMenu = withStyles({
    paper: {
        backgroundColor: '#3f51b5',
        color: '#fff'
    }

})((props) => (
    <Menu elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        {...props} />
));
const MenuList = React.memo(({ sideBarFlag }) => {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [dropDownFlag, setDropDown ] = useState(false);
    const [open, setOpen] = useState(false);
    const {login, forumList} = useContextState();
    const {setLogin, setUserAuth} = useContextDispatch();
    const openList = (e) => {
        setAnchorEl(e.currentTarget);
        setDropDown(!dropDownFlag)
    }
    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const closeMenu = () => {
        setAnchorEl(null);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const goTo = (destination) => {
        history.push(destination)
    }
    const logout = () => {
        axios.put('/api/user/logout').then(res =>{
            console.log(res)
            setLogin(false)
            setUserAuth(0)
        })
    }
    const platItems = [
        { name: '연구실', 
          destination: ''},
        { name: 'professor', 
          destination: 'professor'}, 
        { name: '구성원',
          destination: 'member'}, 
        { name: '프로젝트',
          destination: 'project'}, 
    ]
    useEffect(()=> {
        console.log(login)
        if(login){
            setOpen(false)
        }else{
            
        }
    },[login])
    return (
        <>
        { platItems.map((item,i) => {
            return(
            <Button className = {sideBarFlag ? classes.sideBarButton : classes.navButton} 
                    color     = "inherit"
                    key       = {i}
                    onClick   = {()=>{goTo(item.destination)}}>
                {item.name}
            </Button>)
        })}
        <Dialog className = {classes.dialog}
                open      = {open}
                onClose   = {handleClose}>
            <Container className={classes.dialogCon}>
                <Login />
            </Container>
        </Dialog>
        {
           sideBarFlag ? 
           <>
           <Button className={classes.sideBarButton}
                color   = "inherit"
                id      = 'forum'
                onClick = {openList}>
                게시판
            </Button>
            <Collapse in={Boolean(dropDownFlag && anchorEl.id === 'forum')}
                      timeout="auto"
                      unmountOnExit>
                <List component="div"
                    disablePadding>
                    {forumList.map((forum, j) => {
                        return (
                            <ListItem className = {classes.nested}
                                      key       = {j}
                                      button>
                                <NavLink className = {classes.noDecoration} to={{
                                    pathname: `/forum/${forum.category}`
                                }}>
                                    <ListItemText primary={forum.category} />
                                </NavLink>
                            </ListItem>)
                    })}
                </List>
            </Collapse>
            </>
           :
           <>
                <Button className = {classes.navButton} 
                        onClick   = {openMenu}
                        color     = "inherit">
                    게시판
                </Button> 
                <StyledMenu anchorEl   = {anchorEl}
                            keepMounted
                            open       = {Boolean(anchorEl)}
                            onClose    = {closeMenu}>
                    {forumList.map((forum, j) => 
                        <MenuItem key = {j}
                                id  = {forum.destination}
                                onClick = {closeMenu}>
                            <NavLink className = {classes.noDecoration}to = {{
                                    pathname: `/forum/${forum.category}`
                                }}>
                                {forum.category}
                            </NavLink>
                        </MenuItem>
                    )}
                </StyledMenu>
            </>
        }
        <Button className = {sideBarFlag ? classes.sideBarButton : classes.navButton} 
                color     = "inherit"
                onClick   = {login ? logout : handleOpen}>
            {login ? 'LOGOUT' : 'LOGIN'}
        </Button>
        </>
    )
})
const Navigation = () => {
    const classes = useStyles()
    const [toggleFlag, setToggleFlag] = useState(false)
    const toggleDrawer = useCallback(e => {
        setToggleFlag(!toggleFlag)
    }, [toggleFlag])

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className='toolbar'>
                    <Typography variant="h6" className={classes.title}>
                        DI Lab
                    </Typography>
                    <MenuList />
                    <IconButton edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor='right'
                        open={toggleFlag}
                        onClose={toggleDrawer}>
                        <div className={classes.sideBar}>
                            <MenuList sideBarFlag={true} />
                        </div>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default React.memo(Navigation)
