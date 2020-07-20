import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
{/* CSS부분 */ }
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const SignUp = () => {
    const [user_name, setName] = useState(null);
    const [user_Id, setuser_Id] = useState('');
    const [password, setPass] = useState('');
    const [passCheck, setPassCheck] = useState('');

    {/* MODAL 부분 */}
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    {/* MODAL 부분 */}

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
        if (checkPass == true && checkId == true) {
            axios.post('/api/user/addUser', {
                user_name: user_name,
                user_Id: user_Id,
                password: password
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });
        } else {
            alert("비밀번호 확인버튼이나 아이디 중복검사를 눌러주세요.");
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
        <div className="div" id="signup">
            <Input
                className="input"
                placeholder="이름"
                type="text"
                name="user_name"
                id="user_name"
                onChange={setNameText}
            />
            <br />

            <Input
                className="input"
                placeholder="아이디(학번)"
                type="number"
                name="user_Id"
                id="user_Id"
                onChange={setIdText}
            />

            <Button className="button1" variant="outlined" color="primary" value="중복체크" onClick={checkuser_Id}>아이디 중복확인</Button>
            <br />

            <Input
                className="input"
                placeholder="비밀번호"
                type="password"
                name="password"
                id="password"
                onChange={setPassWord}
            />
            <br />

            <Input
                className="input"
                placeholder="비밀번호 재확인"
                type="password"
                name="passCheck"
                id="passCheck"
                onChange={setPassWordCheck}
            />
            <Button className="button1" variant="outlined" color="primary" value="비밀번호 재확인" onClick={passWordCheck}>비밀번호 재확인</Button>
            <br />

            <Button className="button2" variant="outlined" color="primary" value="가입완료" onClick={add_User}>가입완료</Button>
            <br />


            {/* MODAL 부분 */}
            <button type="button" onClick={handleOpen}>
                modal check!
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <SignUp/>
                    </div>
                </Fade>
            </Modal>
            {/* MODAL 부분 */}


        </div>
    );
};

export default SignUp;