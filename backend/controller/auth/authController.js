<<<<<<< HEAD
import dao from '../../model/mysql/userDAO';
=======
import dao from '../../model/mysql/loginDAO';
>>>>>>> e78fa5904093a92a906c4b54da72f590c881d741
import {asyncWrapper} from '../../lib/helper'
const getUserAuth = (req, res) => {
    dao.params.user_id = req.query.user_id;
    dao.params.password = req.query.password;
<<<<<<< HEAD
    dao.getUserInfo((err, row)=>{
        if(row !== 0) {
        const password = row[0].password;
        
        if(password === dao.params.password)
            res.json(1);
        else
            res.json(0);
        }
        else
        res.json(-1);
    });
=======
    dao.getUserAuth((err, rows)=>{
        const inputPW = dao.params.password
        
        if(rows.length) {
            if(inputPW === rows[0].password)
                res.json(1);
            else
                res.json(0);
        }
        else
            res.json(-1);
    })
>>>>>>> e78fa5904093a92a906c4b54da72f590c881d741
}
module.exports = {
    getUserAuth:getUserAuth
}