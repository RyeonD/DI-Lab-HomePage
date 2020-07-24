import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField, Container, Box, Dialog } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';
import { toast } from 'react-toastify'
import SignUp from '../SignUp/SignUp';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: '450px',
        height: '550px',
    },
    form: {
        alignContent: 'center',
    },
    typography: {
        textAlign: 'center',
        margin: theme.spacing(7,'auto',4),
        fontSize: '35px',
        fontWeight: 700,
    },
    textInput: {
        margin: theme.spacing(0.8,0),
        width: '100%',
        height: '55px',
    },
    loginButton: {
        margin: theme.spacing(3,0,1),
        width: '100%',
        height: '50px',
        fontSize: '17px',
        color: 'white',
        backgroundColor:'#3f51b5',
    }
}))

const Login = () => { 
    const classes = useStyles();
    const [ user_id, setUserId ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ err, setError ] = useState('');
    const [ open, setOpen ] = useState(false);
    const signUp = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const appChange = (e) => {
        if(e.target.id === "user_id")
            setUserId(e.target.value);
        else
            setPassword(e.target.value);
    }
    const appKeyPress = (e) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }
    const throwErrorMessage = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
        });
    }
    const validate = (value) => {
        if(value === 1) {
            /* 로그인 */
            console.log("로그인");
        }
        else if(value === 0) {
            /* 비밀번호 틀림 */
            console.log("비밀번호 문제");
            throwErrorMessage("비밀번호가 틀렸습니다.");
            setError('pw');
        }
        else {
            /* 아이디 틀림 */
            console.log("아이디 문제");
            throwErrorMessage("아이디가 틀렸습니다.");
            setError('id');
        }
        return true
    }
    const onSubmit = (e) => {
        axios.get('/api/auth/userAuth',{
            params: {
                user_id:`${user_id}`,
                password:`${password}`
            }
        }).then( res => {
            const value = res.data;
            validate(value);
        });
        
        console.log(`ID: ${user_id} / PW: ${password}`)
    }

    return (
        <Container className={classes.paper}>
        <div className={classes.form} id="loginForm">
            
                <Box className={classes.typography}>
                    <Typography className={classes.typography}>
                        로그인
                    </Typography>
                </Box>
            
            <TextField  error={err === 'id' ? true : false}
                        type="text" 
                        placeholder="아이디를 입력하세요."
                        label="아이디" 
                        id="user_id"
                        value={user_id}
                        onChange={appChange}
                        onKeyPress={appKeyPress}
                        variant="outlined"
                        className={classes.textInput}
                        required
                />
            <TextField  error={err === 'pw' ? true : false}
                        type="password" 
                        placeholder="비밀번호를 입력하세요."
                        label="비밀번호"
                        id="password"
                        value={password}
                        onChange={appChange}
                        onKeyPress={appKeyPress}
                        variant="outlined"
                        className={classes.textInput}
                        required
                />
            <Button type="submit"
                    onClick={onSubmit}
                    className={classes.loginButton}
                >로그인
            </Button>
            <Button onClick = {signUp}>회원가입</Button>
            <Dialog open      = {open}
                    onClose   = {handleClose}>
                <SignUp />
            </Dialog>
        </div>
        </Container>
    )
}
export default Login;