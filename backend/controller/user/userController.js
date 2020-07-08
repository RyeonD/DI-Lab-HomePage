import DAO from '../../model/mysql/userDAO.json';
const getUserInfo = (req, res) => {
    res.send(DAO)
}
module.exports = {
    getUserInfo:getUserInfo
}