import db from './mysqlDBHelper';
import { param } from '../../routes';
const params = {
    user_id      : null,
    user_name    : null,
    password     : null
}
const getUserInfo = async() => {
    const connection = await db.getConnection()
    const [rows] = await connection.query(
        `select * 
         from User
         where user_id = ?
        `,[
            params.user_id
    ])
    await connection.release();
    return rows
}

const addUser = async () => {
    const connection = await db.getConnection()
    const [rows] = await connection.query(
        `insert into User (
            name,
            user_id,
            password
        )
        values (
            ?,
            ?,
            ?
        )`,[
            params.user_name,
            params.user_id,
            params.password
    ])
    await connection.release();
    return rows
}
module.exports = {
    params: params,
    getUserInfo: getUserInfo,
    addUser : addUser
}