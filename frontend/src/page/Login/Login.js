import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

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
        });
        console.log(`ID: ${this.state.id} / PW: ${this.state.pw}`)
    }
    
    render() {
        const { id, pw } = this.state;
        return (
            <Container component="main" maxwidth="xs">
            <div className={useStyles.paper}>
                <form className={useStyles.form} noValidate>
                <TextField  type="text" 
                            placeholder="아이디를 입력하세요."
                            label="아이디" 
                            name="id"
                            value={id}
                            onChange={this.appChange}
                            onKeyPress={this.appKeyPress}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                        />
                <TextField  type="password" 
                            placeholder="비밀번호를 입력하세요."
                            label="비밀번호"
                            name="pw"
                            value={pw}
                            onChange={this.appChange}
                            onKeyPress={this.appKeyPress}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                        />
                <Button type="submit"
                        onClick={this.onSubmit}
                        variant="outlined"
                        color="primary"
                        className={useStyles.submit}
                        >로그인
                </Button>
                </form>
            </div>
            </Container>
        )
    }
 }

export default Login;