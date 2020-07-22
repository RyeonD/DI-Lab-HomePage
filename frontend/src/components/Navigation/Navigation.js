import React, { useState, useCallback } from 'react';
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
import SignUp from '../SignUp/SignUp'

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
    let history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [dropDownFlag, setDropDown ] = useState(false);
    const [open, setOpen] = useState(false);
    const login = (<Login/>)
    const openList = (e) => {
        setAnchorEl(e.currentTarget);
        setDropDown(!dropDownFlag)
    }
    const openMenu = (e) => {
        console.log(e.currentTarget)
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
    const callApi = () => {
        axios.get('/api/user/userInfo', {
            params: {
                user_id: '201413286'
            }
        }).then(res => {
            console.log(res);
        });
    };
    const menuItems = [
        { name: '연구실', 
          destination: '' }, 
        { name: '구성원' }, 
        { name: '프로젝트'}, 
        { name: '게시판', 
          onClick: openMenu,
          destination: 'openModal',
          nested: [ 
              { name: '강의 게시판',   
                destination: 'forum/lecture'}, 
              { name: '세미나 게시판', 
                destination: 'forum/seminar'}]} , 
        { name: 'login',
          onClick: handleOpen,
          login: true }
    ];

    return (
        menuItems.map((item, i) => {
            if (sideBarFlag && item.nested) {
                return (
                    <List key={i}>
                        <Button className={sideBarFlag ? classes.sideBarButton
                            : classes.navButton}
                            color="inherit"
                            key={i}
                            id={item.name}
                            onClick={openList}>
                            {item.name}
                        </Button>
                        <Collapse in={Boolean(dropDownFlag && anchorEl.id === item.name)}
                            timeout="auto"
                            unmountOnExit>
                            <List component="div"
                                disablePadding>
                                {item.nested.map((nestedItem, j) => {
                                    return (
                                        <ListItem className={classes.nested}
                                            key={`${i}-${j}`}
                                            id={nestedItem.destination}
                                            button
                                            onClick={nestedItem.onClick}>
                                            <NavLink className={classes.noDecoration} to={{
                                                pathname: `/${nestedItem.destination}`
                                            }}>
                                                <ListItemText primary={nestedItem.name} />
                                            </NavLink>
                                        </ListItem>)
                                })}
                            </List>
                        </Collapse>
                    </List>
                )
            }
            else {
                return (
                <React.Fragment key = {i}>
                <Button className = {sideBarFlag ? classes.sideBarButton : classes.navButton} 
                        color     = "inherit"
                        key       = {i}
                        id        = {item.destination}
                        onClick   = {item.nested || item.login ? item.onClick : null}>
                    {item.nested || item.login ? item.name :
                    <NavLink className = {classes.noDecoration}to = {{
                        pathname:`/${item.destination}`}}>
                        {item.name}
                    </NavLink>}
                </Button>
                {item.name === 'login' ?
                    <Dialog className = {classes.dialog}
                            open      = {open}
                            onClose   = {handleClose}>
                        <Container className={classes.dialogCon}>
                            <Login />
                        </Container>
                    </Dialog> : null
                }
                {
                item.nested ? 
                <StyledMenu id         = {item.name}
                            anchorEl   = {anchorEl}
                            keepMounted
                            open       = {Boolean(anchorEl && anchorEl.id === item.destination)}
                            onClose    = {closeMenu}>
                    {item.nested.map((nestedItem, j) => 
                        <MenuItem key = {j}
                                  id  = {nestedItem.destination}
                                  onClick = {closeMenu}>
                            <NavLink className = {classes.noDecoration}to = {{
                                    pathname:`/${nestedItem.destination}`
                            }}>
                                {nestedItem.name}
                            </NavLink>
                        </MenuItem>
                    )}
                </StyledMenu>:null
                }
                </React.Fragment>
            )}
        })  
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
