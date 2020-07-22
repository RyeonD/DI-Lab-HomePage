import React, {useEffect, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Box, Avatar, Typography, List, ListItemText } from '@material-ui/core';

import profile from './MemberProfile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    box: {
        backgroundColor: "#103110",
        width: '100%'
    }
}));

const rankList = [
    'professor','doctor','master','college','alumni'
];
const memberInfoMenu = [
    'rank','name','email'
];
const memberList = [
    {   rank: 'professor',
        name: '김화종',
        image: '',
        email: '12345@kangwon.ac.kr'
    },
    {   rank: 'doctor',
        name: '김종원',
        image: '',
        email: '123@kangwon.ac.kr' 
    },
    {   rank: 'master',
        name: '김경',
        image: '',
        email: '123@kangwon.ac.kr' 
    },
    {   rank: 'doctor',
        name: '김련경',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {   rank: 'master',
        name: '김욱',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {   rank: 'college',
        name: '김원',
        image: '',
        email: '123@kangwon.ac.kr' 
    },
    {   rank: 'college',
        name: '김련',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {   rank: 'alumni',
        name: '김종',
        image: '',
        email: '123@kangwon.ac.kr'
    },
    {   rank: 'alumni',
        name: '김선',
        image: '',
        email: '12@kangwon.ac.kr'
    },
]  

const Member = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {rankList.map((rank) => 
                <Box    className={classes.box}
                        id = {rank}
                        border={1}>
                    <Typography>{rank}</Typography>
                    { memberList.map((member) => {
                        if(member.rank === rank) {
                            return (
                                <div>
                                    <Typography>{member.name}</Typography>
                                    <Typography>{member.image}</Typography>
                                    <Typography>{member.email}</Typography>
                                </div>
                            )
                        }
                    })}
                </Box>
            )}
        </div>
    )
}

export default Member;
