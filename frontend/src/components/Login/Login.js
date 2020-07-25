import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField, Dialog } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useContextDispatch } from '../../Context';

import axios from 'axios';
import { toast } from 'react-toastify'
import SignUp from '../SignUp/SignUp';

const useStyles = makeStyles((theme) => ({
    '@media screen and (min-width: 601px)' : {
        typography: { fontSize: '200%' }
    },
    '@media screen and (max-width: 600px)' : {
        typography: { fontSize: '150%' }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10% auto 15%',
    },
    typography: {
        textAlign: 'center',
        margin: '5% auto 12%',
        fontWeight: '250%',
    },   
    textInput: {
        width: '100%',
        margin: '1% auto'
    },
    loginButton: {
        display: 'block',
        margin: '3% auto',
        width: '100%',
        color: 'white',
        backgroundColor:'#3f51b5',
    }
}))

const Login = () => { 
    const {setLogin, setUserAuth} = useContextDispatch();
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
    const validate = (certify) => {
        if(certify.result === 1) {
            /* 로그인 */
            setLogin(true)
            setUserAuth(certify.auth)
            console.log(certify)
        }
        if(certify.result === 0) {
            /* 비밀번호 틀림 */
            throwErrorMessage("비밀번호가 틀렸습니다.");
            setError('pw');
        }
        if(certify.result === -1){
            /* 아이디 틀림 */
            throwErrorMessage("아이디가 틀렸습니다.");
            setError('id');
        }
        return true
    }
    const onSubmit = (e) => {
        axios.get('/api/user/certifyResult',{
            params: {
                user_id:`${user_id}`,
                password:`${password}`
            }
        }).then( res => {
            const value = res.data;
            validate(value);
        });
    }

    return (
        
        <div className={classes.form} id="loginForm">
            

            <Typography className={classes.typography}>
                로그인
            </Typography>

            
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

    )
}
export default Login;