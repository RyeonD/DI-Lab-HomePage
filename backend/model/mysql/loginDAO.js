import db from './mysqlDBHelper';
const params = {
    user_id      : null,
    name         : null,
    password     : null
}
const getUserAuth = (callback) => {
    db.getConnection((err, conn) => {
        conn.query(
            `select * 
             from User
             where user_id = ?
            `,[
                params.user_id
            ],(err, rows) => {
                conn.release();
                if (!err){
                    callback(null, rows);
                }else{
                    console.log('err',err);
                }
            }
        )
    })
}
module.exports = {
    params: params,
    getUserAuth: getUserAuth,
}