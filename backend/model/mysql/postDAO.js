import db from './mysqlDBHelper';
import { param } from '../../routes';
const params = {
    category        : null,
    from_number     : null,
    number_of_posts : null,
    title           : null,
    contents        : null,
    user_name       : null,
    user_id         : null,
    post_id         : null,
    file_name       : null,
    file_path       : null
}
const getNextPage = async () => {
    const connection = await db.getConnection()
    const [rows] = await connection.query(
        `select A.*, (
                select count(Posts.title) 
                from Posts 
                where category = ?) as 'counts'
        from (
            select *
            from Posts
            where category = ?
            order by post_id desc) A
        limit ?, ?
        `,[
            params.category,
            params.category,
            params.from_number,
            params.number_of_posts
    ])
    await connection.release();
    return rows
}
const getPost = async () => {
    const connection = await db.getConnection()
    const [rows] = await connection.query(
        `select *
        from Posts
        where post_id = ?
        `,[
            params.post_id
    ])
    await connection.release();
    return rows
}
const addPost = async () => {
    const connection = await db.getConnection()
    const [rows] = await connection.query(
        `insert into Posts (
            user_name,
            user_id,
            title,
            contents,
            category
        )
        values (
            ?,
            ?,
            ?,
            ?,
            ?
        )`,[
            params.user_name,
            params.user_id,
            params.title,
            params.contents,
            params.category
    ])
    await connection.release();
    return rows
}
const addFile = async () => {
    const connection = await db.getConnection()
    const [rows] = await connection.query(
    `insert into Files (
        post_id,
        file_name,
        file_path
    )
    values (
        ?,
        ?,
        ?
    )`,[
        params.post_id,
        params.file_name,
        params.file_path
    ])
    await connection.release();
    return rows
}
const getFiles = async() => {
    const connection = await db.getConnection()
    const [rows] = await connection.query(
    `select file_name, file_path
    from Files
    where post_id = ?
    `,[
        params.post_id
    ])
    await connection.release();
    return rows
}
module.exports = {
    params: params,
    getNextPage : getNextPage,
    getPost     : getPost,
    addPost     : addPost,
    addFile     : addFile,
    getFiles    : getFiles
}