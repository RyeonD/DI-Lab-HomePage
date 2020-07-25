import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { makeStyles, } from '@material-ui/core/styles';
import { Box, Avatar, Typography, Link, } from '@material-ui/core';

import img from './cat.jpg'

const useStyles = makeStyles((theme) => ({
    '@media screen and (max-width: 1000px)': {
        rankBox: {

        },
        rankTitle: {
            margin: '5%',
            width: '20vw',
        },
        rankTitleEng: {
            fontSize: '5vw',
        },
        rankTitleKor: {
            fontSize: '3vw'
        },
        profileBox: {
            width: '70vw',
            margin: 'auto',
        },
        profile: {
            width: '25vw',
            margin: '5vw auto',
        },
        profileImg: {
            width: '15vw',
            height: '15vw',
            margin: '10px auto'
        },
        infoName: {
            fontSize: '4vw',
        },
        info: {
            fontSize: '2.2vw'
        }
    },
    '@media screen and (min-width: 1001px)': {
        rankBox: {

        },
        rankTitle: {
            width: '500px',
        },
        rankTitleEng: {
            fontSize: '40px',
        },
        rankTitleKor: {
            fontSize: '20px',
        },
        profileBox: {
            width: '1000px',
            padding: '70px'
        },
        profile: {
            width: '300px',
            margin: '50px 5px',
        },
        profileImg: {
            width: theme.spacing(27),
            height: theme.spacing(27),
            margin: '10px auto'
        },
        infoName: {
            fontSize: '28px',
            margin: '4px'
        },
        info: {
            fontSize: '18px',
            margin: '4px',
        }
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    rankBox: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    rankTitleEng: {
        color: '#414352',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    rankTitleKor: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#82848c',
    },
    profileBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
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
        color: '#82848c',
    },
    infoHome: {
    }
}));

const rankList = [
    {
        eng: 'professor',
        kor: '교수',
    },
    {
        eng: 'doctor',
        kor: '박사',
    },
    {
        eng: 'master',
        kor: '석사',
    },
    {
        eng: 'bachelor',
        kor: '학사',
    },
    {
        eng: 'alumni',
        kor: '졸업생',
    },
];

const memberList = [
    {
        rank: 'professor',
        name: '김화종',
        image: img,
        email: 'hjkim@gmail.com',
        room: '공대 6호관 403호',
        homepage: 'https://www.kangwon.ac.kr/www/index.do'
    },
    {
        rank: 'doctor',
        name: '김종원',
        image: '',
        email: '123@kangwon.ac.kr',
        homepage: 'df'
    },
    {
        rank: 'master',
        name: '김경',
        image: '',
        email: '123@kangwon.ac.kr'
    },
    {
        rank: 'doctor',
        name: '김련경',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {
        rank: 'master',
        name: '김욱',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김원',
        image: '',
        email: '123@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김련',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김종원',
        image: '',
        email: '123@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김경',
        image: '',
        email: '123@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김련경',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김욱',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {
        rank: 'alumni',
        name: '김종',
        image: '',
        email: '123@kangwon.ac.kr'
    },
    {
        rank: 'alumni',
        name: '김선',
        image: '',
        email: '',
        job: '네이버'
    },
    {
        rank: 'bachelor',
        name: '김련',
        image: '',
        email: '12@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김종원',
        image: '',
        email: '123@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김경',
        image: '',
        email: '123@kangwon.ac.kr'
    },
]

const Member = () => {
    const classes = useStyles();

    AOS.init();

    return (
        <div className={classes.root} >
            {rankList.map((rank, i) =>
                <div className={classes.rankBox}
                    key={i}
                    id={rank.eng}
                    data-aos="fade-up"
                    data-aos-item="fade-left"
                    style={{ backgroundColor: i % 2 === 0 ? '#e3e3ff' : 'white' }}>
                    <Box className={classes.rankTitle}>
                        <Typography className={classes.rankTitleEng}>{rank.eng}</Typography>
                        <Typography className={classes.rankTitleKor}>{rank.kor}</Typography>
                    </Box>
                    <Box className={classes.profileBox}>
                        {memberList.map((member, j) => {
                            if (member.rank === rank.eng) {
                                return (
                                    <div className={classes.profile}
                                        key={j}>
                                        <Avatar className={classes.profileImg}
                                            src={member.image}></Avatar>
                                        <Typography className={classes.infoName}>{member.name}</Typography>
                                        <Typography className={classes.info}>{member.job}</Typography>
                                        <Typography className={classes.info}>{member.room}</Typography>
                                        <Typography className={classes.info}>{member.email}</Typography>
                                        <Typography className={classes.info}>
                                            {member.homepage ?
                                                <Link className={classes.infoHome}
                                                    href={member.homepage}
                                                    target="_blank"
                                                    underline="hover">
                                                    홈페이지
                                        </Link> : null}
                                        </Typography>
                                    </div>
                                )
                            }
                        })}
                    </Box>
                </div>

            )}
        </div>
    )
}

export default Member;
