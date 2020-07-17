import dao from '../../model/mysql/loginDAO';
import {asyncWrapper} from '../../lib/helper'
const getUserAuth = (req, res) => {
    dao.params.user_id = req.query.user_id;
    dao.params.password = req.query.password;
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
}
module.exports = {
    getUserAuth:getUserAuth
}