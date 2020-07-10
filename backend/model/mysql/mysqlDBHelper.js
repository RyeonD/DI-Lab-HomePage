const config = require('../../config/dbConfig.js')

const mysql = require('mysql')
const pool = mysql.createPool({
                connectionLimit  : 20,
                user: config.mysql.user,
                host: config.mysql.host,
                password:config.mysql.password,
                database:config.mysql.database,
                waitForConnections:false
            })
const getConnection = (query) => {
    return pool.getConnection(query)
}
module.exports = {
    pool: pool,
    getConnection: getConnection
}