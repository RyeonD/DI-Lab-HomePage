import dao from '../../model/mysql/userDAO';
import {asyncWrapper} from '../../lib/helper'
const getUserAuth = (req, res) => {
    dao.params.user_id = req.query.user_id;
    dao.params.password = req.query.password;

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
}

module.exports = {
    getUserAuth:getUserAuth
}

