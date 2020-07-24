import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Login from '../Login/Login';
import axios from 'axios';

{/* CSS부분 */ }
const useStyles = makeStyles((theme) => ({
    textInput: {
        margin: theme.spacing(0.8, 0),
        width: '100%',
        height: '55px',
    },
    signUpBT: {
        margin: theme.spacing(3, 0, 1),
        width: '100%',
        height: '50px',
        fontSize: '17px',
        color: 'white',
        backgroundColor: '#3f51b5',
    },
}));

const SignUp = () => {
    const [user_name, setName] = useState('');
    const [user_Id, setuser_Id] = useState('');
    const [password, setPass] = useState('');
    const [passCheck, setPassCheck] = useState('');
    const classes = useStyles();

    var checkName = new Boolean(false);
    var checkPass = new Boolean(false);
    var checkId = new Boolean(true);

    const setNameText = e => {
        setName(e.target.value);
    };
    const setIdText = e => {
        setuser_Id(e.target.value);
    };
    const setPassWord = e => {
        setPass(e.target.value);
    };
    const setPassWordCheck = e => {
        setPassCheck(e.target.value);
    };

    {/* 회원가입 버튼을 눌렀을때 실행될 함수 */ }
    const add_User = () => {
        if(user_name !== ''){
            checkName = true;
        }
        if (checkPass == true && checkId == true && checkName == true) {
            axios.post('/api/user/addUser', {
                user_name: user_name,
                user_Id: user_Id,
                password: password
            })
                .then(function (response) {
                    alert("회원가입이 완료되었습니다.");
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });
        }else {
            alert("이름,아이디,비밀번호를 확인해주세요.");
        }
    }

    {/* 아이디 중복체크를 눌렀을때 실행될 함수 */ }
    const checkuser_Id = () => {
        if (user_Id === '') {
            alert("아이디(학번)를 입력해주세요.");
        } else {
            axios.post('/api/user/checkuser_Id', {
                user_Id: user_Id,
            })
                .then(function (response) {
                    if (response.data.result == undefined) {
                        alert("사용 가능한 아이디입니다.");
                    } else {
                        checkId = false;
                        alert("이미 가입된 아이디입니다.");
                    }
                    console.log(response.data.result);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });
        }
    }

    {/* 비밀번호확인을 눌렀을때 실행될 함수 */ }
    const passWordCheck = () => {
        if (password === '' || passCheck === '') {
            alert("비밀번호를 입력해주세요.");
        } else if (password !== passCheck) {
            alert("비밀번호가 틀립니다. 다시 입력해주세요.");
        } else {
            alert("비밀번호가 맞습니다.");
            checkPass = true;
        }
    }


    return (
        <Container className={classes.paper}>
            <div className={classes.form} id="signup">
                <Box className={classes.typography}>
                    <Typography className={classes.typography}>
                        회원가입
                    </Typography>
                </Box>
                <br />

                <TextField
                    type="text"
                    className={classes.textInput}
                    variant="outlined"
                    placeholder="이름*"
                    name="user_name"
                    id="user_name"
                    onChange={setNameText}
                />
                <br />

                <TextField
                    className={classes.textInput}
                    variant="outlined"
                    placeholder="아이디(학번)*"
                    type="number"
                    name="user_Id"
                    id="user_Id"
                    onChange={setIdText}
                />

                <Button className={classes.signUpBT} value="중복체크" onClick={checkuser_Id}>아이디 중복확인</Button>
                <br />

                <TextField
                    className={classes.textInput}
                    variant="outlined"
                    placeholder="비밀번호*"
                    type="password"
                    name="password"
                    id="password"
                    onChange={setPassWord}
                />
                <br />

                <TextField
                    className={classes.textInput}
                    variant="outlined"
                    placeholder="비밀번호 재확인*"
                    type="password"
                    name="passCheck"
                    id="passCheck"
                    onChange={setPassWordCheck}
                />
                <Button className={classes.signUpBT} value="비밀번호 재확인" onClick={passWordCheck}>비밀번호 재확인</Button>
                <br />

                <Button className={classes.signUpBT} value="가입완료" onClick={add_User}>가입완료</Button>
            </div>
        </Container>
    );
};

export default SignUp;