import dao from '../../model/mysql/userDAO';
import {asyncWrapper} from '../../lib/helper'
const getUserInfo = (req, res) => {
    dao.params.user_id = req.query.user_id;
    dao.getUserInfo((err, rows)=>{
        res.json(rows);
    });
}
module.exports = {
    getUserInfo:getUserInfo
}