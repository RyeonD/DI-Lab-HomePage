import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { TextField, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { toast } from 'react-toastify'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
    
    throwErrorMessage = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
        });
    }
    validate = (value) => {
        if(value === 1) {
            /* 로그인 */
            console.log("로그인");
        }
        else if(value === 0) {
            /* 비밀번호 틀림 */
            console.log("비밀번호 문제");
            this.throwErrorMessage("비밀번호가 틀렸습니다.");
        }
        else {
            /* 아이디 틀림 */
            console.log("아이디 문제");
            this.throwErrorMessage("아이디가 틀렸습니다.");
        }
        return true
    }

    onSubmit = () => {
        axios.get('/api/auth/userAuth',{
            params: {
                user_id:`${this.state.id}`,
                password:`${this.state.pw}`
            }
        }).then( res => {
            const value = res.data;
            console.log(res);
            this.validate(value);
        });
        
        console.log(`ID: ${this.state.id} / PW: ${this.state.pw}`)
    }
    
    render() {
        const { id, pw } = this.state;
        return (
            <Modal open="open">
            <Container maxwidth="xs">
            <div className={useStyles.paper} id="loginForm">
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
                        >로그인
                </Button>
            </div>
            </Container>
            </Modal>
        )
    }
 }

export default Login;