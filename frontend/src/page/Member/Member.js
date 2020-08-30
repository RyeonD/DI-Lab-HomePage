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
            fontSize: '3vw',
        },
        info: {
            fontSize: '2vw'
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
            width: '1700px',
            padding: '70px',
        },
        profile: {
            width: '300px',
            margin: '50px 5px',
        },
        profileImg: {
            width: theme.spacing(20),
            height: theme.spacing(20),
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
        margin:'0 12vw'
    },
    rankBox: {
        width: '100%',
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
        rank: 'doctor',
        name: '방준일',
        image: '',
        email: '@kangwon.ac.kr',
        homepage: ''
    },
    {
        rank: 'doctor',
        name: '홍성은',
        image: '',
        email: '@kangwon.ac.kr',
        homepage: 'httsp://github.com/sungkenh',
    },
    {
        rank: 'master',
        name: '이현수',
        image: '',
        email: '@kangwon.ac.kr'
    },
    {
        rank: 'master',
        name: '김선욱',
        image: '',
        email: '@kangwon.ac.kr'
    },
    {
        rank: 'master',
        name: '박태주',
        image: '',
        email: '@kangwon.ac.kr'
    },
    {
        rank: 'master',
        name: '이현수',
        image: '',
        email: '@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '김종원',
        image: '',
        email: '@kangwon.ac.kr'
    },
    {
        rank: 'bachelor',
        name: '이규민',
        image: '',
        email: '@kangwon.ac.kr'
    },
    {
        rank: 'alumni',
        name: '권혁민',
        image: '',
        email: '123@kangwon.ac.kr',
        job: '스위트케이',
    },
    {
        rank: 'alumni',
        name: '이덕주',
        image: '',
        email: '',
        job: 'SK security',
    },
    {
        rank: 'alumni',
        name: '김종원',
        image: '',
        email: '',
        job: '',
    },
    {
        rank: 'alumni',
        name: '김태성',
        image: '',
        email: '',
        job: '',
    },
    {
        rank: 'alumni',
        name: '한주석',
        image: '',
        email: '',
        job: '',
    },
    {
        rank: 'alumni',
        name: '신주환',
        image: '',
        email: '',
        job: '오라클',
    },
    {
        rank: 'alumni',
        name: '박대서',
        image: '',
        email: '',
        job: '',
    },
    {
        rank: 'alumni',
        name: '강문현',
        image: '',
        email: '',
        job: '더존',
    },
    {
        rank: 'alumni',
        name: '박민영',
        image: '',
        email: '',
        job: '더존',
    },
    {
        rank: 'alumni',
        name: '김성중',
        image: '',
        email: '',
        job: '롯데',
    },
    {
        rank: 'alumni',
        name: '안두헌',
        image: '',
        email: '',
        job: '',
    },
    {
        rank: 'alumni',
        name: '오치문',
        image: '',
        email: '',
        job: '카카오',
    },
    {
        rank: 'alumni',
        name: '장걸',
        image: '',
        email: '',
        job: '베이징대 교수',
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
