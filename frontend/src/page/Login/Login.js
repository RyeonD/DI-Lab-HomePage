import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import axios from 'axios';

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
        axios.get('/api/auth/authLogin',{
            params: {
                user_id: `${this.state.id}`,
                password: `${this.state.pw}`
            }
        }).then( res => {
             console.log(res);
        });
        console.log(`ID: ${this.state.id} / PW: ${this.state.pw}`)
    }
    
    render() {
        const { id, pw } = this.state;
        return (
            <div className="login">
                <form method="post" className="loginForm">
                    <Input  type="text" 
                            placeholder="아이디를 입력하세요." 
                            name="id"
                            value={id}
                            onChange={this.appChange}
                            onKeyPress={this.appKeyPress}
                            />
                    <br/>
                    <Input  type="password" 
                            placeholder="비밀번호를 입력하세요."
                            name="pw"
                            value={pw}
                            onChange={this.appChange}
                            onKeyPress={this.appKeyPress}
                          />
                    <br/>
                    <Button onClick={this.onSubmit}
                            size="large"
                            >로그인</Button>
                    </form>
            </div>
        )
    }
 }

export default Login;