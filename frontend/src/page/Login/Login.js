import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
<<<<<<< HEAD

import axios from 'axios';

=======
import { TextField, makeStyles } from '@material-ui/core';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

>>>>>>> e78fa5904093a92a906c4b54da72f590c881d741
class Login extends React.Component {

    state = {
        id: '',
        pw: ''
    }
    
    appChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    appKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.onSubmit();
        }
    }
<<<<<<< HEAD

    onSubmit = () => {
        axios.get('/api/auth/authLogin',{
            params: {
                user_id: `${this.state.id}`,
                password: `${this.state.pw}`
            }
        }).then( res => {
             console.log(res);
=======
    
    onSubmit = () => {
        axios.get('/api/auth/userAuth',{
            params: {
                user_id:`${this.state.id}`,
                password:`${this.state.pw}`
            }
        }).then( res => {
            const value = res.data;
            console.log(value);
            if(value === 1) {
                /* 로그인 */
                console.log("로그인");
            }
            else if(value === 0) {
                /* 비밀번호 틀림 */
                console.log("비밀번호 문제");
            }
            else {
                /* 아이디 틀림 */
                console.log("아이디 문제");
            }
        
>>>>>>> e78fa5904093a92a906c4b54da72f590c881d741
        });
        console.log(`ID: ${this.state.id} / PW: ${this.state.pw}`)
    }
    
    render() {
        const { id, pw } = this.state;
        return (
<<<<<<< HEAD
            <div className="login">
                <form method="post" className="loginForm">
                    <Input  type="text" 
=======
            <div className={useStyles.margin}>
                <form method="post" className="loginForm">
                    <TextField  type="text" 
>>>>>>> e78fa5904093a92a906c4b54da72f590c881d741
                            placeholder="아이디를 입력하세요." 
                            name="id"
                            value={id}
                            onChange={this.appChange}
                            onKeyPress={this.appKeyPress}
<<<<<<< HEAD
                            />
                    <br/>
                    <Input  type="password" 
=======
                            variant="outlined"
                        />
                    <TextField  type="password" 
>>>>>>> e78fa5904093a92a906c4b54da72f590c881d741
                            placeholder="비밀번호를 입력하세요."
                            name="pw"
                            value={pw}
                            onChange={this.appChange}
                            onKeyPress={this.appKeyPress}
<<<<<<< HEAD
                          />
                    <br/>
                    <Button onClick={this.onSubmit}
                            size="large"
                            >로그인</Button>
=======
                            variant="outlined"
                        />
                    <Button variant="contianed"
                            color="inherit"
                            onClick={this.onSubmit}
                            size="large"
                            
                        >로그인
                        </Button>
>>>>>>> e78fa5904093a92a906c4b54da72f590c881d741
                    </form>
            </div>
        )
    }
 }

export default Login;