import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.png'
const useStyles = makeStyles((theme) => ({
    footerWrapper:{
        width:'calc(100% - 120px)',
        backgroundColor:'#1B1C1F',
        padding:'60px',
        color:'#c0c4c7',
        fontSize:'small'
    },
    contact:{
        marginTop:'10px'
    }
}))

const Footer = () => { 
    const classes = useStyles();
    
    return (
        <div className = {classes.footerWrapper}>
            <img src = {logo}></img><br/>
            <div className = {classes.contact}>

            강원도 춘천시 강원대학길 1 공학6호관 413호<br/>
            Tel: 033-250-6323<br/>
            Email: hjkim3@gmail.com<br/>
            </div>
        </div>
    )
}
export default Footer;