import db from './mysqlDBHelper';
const params = {
    user_id      : null,
    name         : null,
    password     : null
}
const getUserInfo = async() => {
    const connection = await db.getConnection()
    const [rows] = await connection.query(
        `select *
        from User
        where user_id = ?`
        ,[
            params.user_id
        ])
        await connection.release();
        return rows
}
module.exports = {
    params: params,
    getUserInfo: getUserInfo,
}