import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Avatar, Typography, Link, AppBar, Tabs, Tab } from '@material-ui/core';

import img from './cat.jpg'
import shadows from '@material-ui/core/styles/shadows';

const useStyles = makeStyles((theme) => ({
    '@media screen and (max-width: 900px)': {
        rankBox: {
            
        },
        rankTitle: {
            margin: '3vw auto',
            width: '40vw',
        },
        rankTitleEng: {
            fontSize: '4vw',
        },
        rankTitleKor: {
            fontSize: '3vw'
        },
        profileBox: { 
            width: '20vw',
            margin: 'auto', 
        },
        profile: {
            width: '40vw',
            margin: '3vw auto',
        },
        profileImg: {
            width: '13vw',
            height: '13vw',
            margin: '10px auto'
        },
        infoName: {
            fontSize: '4vw',
        },
        info: {
            fontSize: '2.2vw'
        }
    },
    '@media screen and (min-width: 901px)': {
        rankBox: {
            height: '50vw',
        },
        rankTitle: {
            width: '250px',
        },
        rankTitleEng: {
            fontSize: '37px', 
        },
        rankTitleKor: {
            fontSize: '20px',
            color: '#82848c',
        },
        profileBox: { 
            width: '800px',
        },
        profile: {
            width: '200px',
            margin: '25px 3px',
        },
        profileImg: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            margin: '10px auto'
        },
        infoName: {
            fontSize: '27px',
        },
        info: {
            fontSize: '16px'
        }
    },
    root: {
        
    },
    memberBox: {
        display: 'flex',
        flexDirection: 'column',
    },
    rankBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'center',
        alignItems: 'center',
    },
    rankTitleEng: {
        color: '#414352',
        fontWeight:'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    rankTitleKor: {
        fontWeight:'bold',
        textAlign: 'center',
    },
    profileBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: '#d6d6ff'
    },
    profile: {

    },
    profileImg: {

    },
    infoName: {
        textAlign: 'center',
        margin: '0 0 1vw'
    },
    info: {
        textAlign: 'center',
    },
    infoHome: {

    }
}));

const rankList = [
    { eng: 'professor',
      kor: '교수',
    },
    { eng: 'doctor',
      kor: '박사',
    },
    { eng: 'master',
      kor: '석사',
    },
    { eng: 'student',
      kor: '학사',
    },
    { eng: 'alumni',
      kor: '졸업생',
    },
];
const memberInfoMenu = [
    'rank','name','email'
];
const memberList = [
    {   rank: 'professor',
        name: '김화종',
        image: img,
        email: 'rytnsla@kangwon.ac.kr',
        room: '4호',
        homepage: 'https://www.kangwon.ac.kr/www/index.do'
    },
    {   rank: 'doctor',
        name: '김종원',
        image: '',
        email: '123@kangwon.ac.kr' ,
        homepage: 'df'
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
    {   rank: 'student',
        name: '김원',
        image: '',
        email: '123@kangwon.ac.kr' 
    },
    {   rank: 'student',
        name: '김련',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {   rank: 'student',
        name: '김종원',
        image: '',
        email: '123@kangwon.ac.kr' 
    },
    {   rank: 'student',
        name: '김경',
        image: '',
        email: '123@kangwon.ac.kr' 
    },
    {   rank: 'student',
        name: '김련경',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {   rank: 'student',
        name: '김욱',
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
        email: '',
        job: '네이버'
    },
]  

const Member = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = () => {
        setValue('red');
    }

    return (
        <div className={classes.root}>
        <div className={classes.memberBox}>
            {rankList.map((rank) =>
                <Box    className={classes.rankBox}
                        id={rank.eng}>
                    <Box className={classes.rankTitle}>
                        <Typography className={classes.rankTitleEng}>{rank.eng}</Typography>
                        <Typography className={classes.rankTitleKor}>{rank.kor}</Typography>
                    </Box>
                    <Box className={classes.profileBox}>
                    { memberList.map((member) => {
                        if(member.rank === rank.eng) {
                            return (
                                <div className={classes.profile}>
                                    <Avatar className={classes.profileImg}
                                            src={member.image}></Avatar>
                                    <Typography className={classes.infoName}>{member.name}</Typography>
                                    <Typography className={classes.info}>{member.job}</Typography>
                                    <Typography className={classes.info}>{member.room}</Typography>
                                    <Typography className={classes.info}>{member.email}</Typography>
                                    <Typography className={classes.info}>
                                        {member.homepage ? 
                                            <Link   className={classes.infoHome}
                                                href={member.homepage}
                                                target="_blank"
                                                underline="always">
                                            홈페이지
                                        </Link> : null}
                                    </Typography>
                                </div>
                            )
                        }
                    })}
                    </Box>
                </Box>
            )}
        </div>
        </div>
    )
}

export default Member;
