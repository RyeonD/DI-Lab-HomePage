import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { makeStyles, } from '@material-ui/core/styles';
import { Box, Avatar, Typography, Link, } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
    '@media screen and (max-width: 1000px)': {
        rankBox: {
            
        },
        rankTitle: {
            margin: '3vw',
        },
        rankTitleEng: {
            fontSize: '4vw',
        },
        rankTitleKor: {
            fontSize: '2vw'
        },
        profileBox: {
            width: '90vw',
        },
        profile: {
            width: '37vw',
            margin: '5vw 3vw',
            padding: '5vw 1vw',
        },
        infomation: {
            width: '20vw',
            margin: '0 2vw',
            
        },
        alumniProfile: { 
            width: '20vw',
            margin: '3vw 3vw',
        },
        profileImg: {
            width: '10vw',
            height: '10vw',
        },
        infoName: {
            fontSize: '2.2vw',
        },
        info: {
            fontSize: '1.2vw'
        },
        homepage: {
            fontSize: '1.9vw'
        },
    },
    '@media screen and (min-width: 1001px)': {
        root: {
            margin: '0 50px'
        },
        rankBox: {
        },
        rankTitle: {
            width: '500px',
            margin: '40px 0 0',
            padding: '5px'
        },
        rankTitleEng: {
            fontSize: '40px',
        },
        rankTitleKor: {
            fontSize: '20px',
        },
        profileBox: {
            width: '1200px',
            padding: '0 50px',
        },
        profile: {
            width: '470px',
            margin: '50px 5px',
        },
        alumniProfile: { 
            width: '300px',
            margin: '40px 10px',
        },
        profileImg: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        infomation: {
            margin: '0 10px',
        },
        infoName: {
            fontSize: '28px',
            padding: '5px 0'
        },
        info: {
            fontSize: '16px',
        },
        homepage: {
            fontSize: '21.5px'
        }
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    rankBox: {
        display: 'flex',
        flexDirection: 'column',
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
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
    },
    alumniProfile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    infomation: {
        display: 'flex',
        flexDirection: 'column',
    },
    profileImg: {
    },
    infoName: {
    },
    info: {
        color: '#82848c',
    },
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
        interest: '시퀀스 데이터 분석 / 임베딩 / 딥러닝',
        email: '@kangwon.ac.kr',
        homepage: 'https://github.com/sungkenh',
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
        email: '',
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
        degree: 'M.S. degree',
    },
    {
        rank: 'alumni',
        name: '강문현',
        image: '',
        email: '',
        job: '더존',
        degree: 'M.S. degree',
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
        degree: 'M.S. degree',
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
                    style={{ backgroundColor: i % 2 === 0 ? '' : '#f2f7ff' }}>
                    <Box className={classes.rankTitle}
                        data-aos="fade-up">
                        <Typography className={classes.rankTitleEng}>{rank.eng}</Typography>
                        <Typography className={classes.rankTitleKor}>{rank.kor}</Typography>
                    </Box>
                    <Box className={classes.profileBox}>
                        {memberList.map((member, j) => {
                            if (member.rank === rank.eng) {
                                return (
                                    <div className={rank.eng === 'alumni' ? classes.alumniProfile : classes.profile}
                                        key={j}
                                        data-aos="fade-up">
                                        <Avatar className={classes.profileImg}
                                            src={member.image}></Avatar>
                                        <div className={classes.infomation}>
                                            {member.rank === 'alumni' ?
                                                <Typography className={classes.info}>{member.degree ? member.degree : <br></br>}</Typography>
                                                : ''}
                                            <Typography className={classes.infoName}>
                                                {member.name} {member.homepage ?
                                                    <Link href={member.homepage}
                                                        target="_blank"
                                                        underline="hover">
                                                        <SvgIcon className={classes.homepage}>
                                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                                        </SvgIcon>
                                                    </Link> : null}
                                            </Typography>
                                            <Typography className={classes.info}>{member.job}</Typography>
                                            <Typography className={classes.info}>{member.interest}</Typography>
                                            <Typography className={classes.info}>{member.email}</Typography>
                                            
                                        </div>
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
