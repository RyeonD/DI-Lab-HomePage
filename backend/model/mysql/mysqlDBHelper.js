const config = require('../../config/dbConfig.js')

const mysql = require('mysql2/promise')
const pool = mysql.createPool({
                connectionLimit  : 20,
                user: config.mysql.user,
                host: config.mysql.host,
                password:config.mysql.password,
                database:config.mysql.database,
                waitForConnections:false
            })
const getConnection = async () => {
    return await pool.getConnection(async conn => conn)
}
module.exports = {
    pool: pool,
    getConnection: getConnection
}