import dao from '../../model/mysql/userDAO';
import {asyncWrapper} from '../../lib/helper'
const getUserInfo = asyncWrapper(async (req, res) => {
    dao.params.user_id = req.query.user_id;
    const result = await dao.getUserInfo();
    res.json(result)
})
module.exports = {
    getUserInfo:getUserInfo
}