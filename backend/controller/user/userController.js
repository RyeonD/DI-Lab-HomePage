import dao from '../../model/mysql/userDAO';
import {asyncWrapper} from '../../lib/helper'
import jwt from 'jsonwebtoken';
const getUserInfo = asyncWrapper(async (req, res) => {
    dao.params.name = req.query.user_name;
    dao.params.user_id = req.query.user_id;
    dao.params.password = req.query.password;
    const result = await dao.getUserInfo();
    res.json(result)
})
const addUser = asyncWrapper(async (req, res) => {
    dao.params.user_name = req.body.user_name;
    dao.params.user_id   = req.body.user_Id;
    dao.params.password  = req.body.password;
    const result = await dao.addUser();
    res.json({'result': result});
})

const checkuser_Id = asyncWrapper(async (req, res) => {
    dao.params.user_id   = req.body.user_Id;
    const result = await dao.checkuser_Id();
    res.json({'result': result[0]});
})
const getCertifyResult = asyncWrapper(async (req, res) => {
    dao.params.user_id = req.query.user_id;
    dao.params.password = req.query.password;
    console.log(req.query)
    const result = await dao.getUserInfo();
    console.log(result)
    if(result.length !== 0) {
        const password = result[0].password;
        if(password === dao.params.password){
            const token = await createToken(result[0])
            console.log(token)
            res.cookie('jwt', token, {
                httpOnly: true,
            })
            res.json(1)
        }
        else
            res.json(0)
    }
    else
        res.json(-1)
})
const createToken = (user) => {
    const promise = new Promise((resolve, reject) => {
        jwt.sign({
            id:        user.user_id,
            name:      user.name,
            authority: user.authority,
        },'dilab',(err, token)=> {
            if(err) reject(err)
            resolve(token)
        })
    })
    return promise
}
const getJWT = (req, res) => {
    return res.send(req.cookies.jwt)
}
const logout = (req, res) => {
    res.cookie('jwt', '')
    return res.send('logout')
}
module.exports = {
    getUserInfo      : getUserInfo,
    addUser          : addUser,
    checkuser_Id     : checkuser_Id,
    getCertifyResult : getCertifyResult,
    getJWT           : getJWT,
    logout           : logout
}