import db from './mysqlDBHelper';
import { param } from '../../routes';
const params = {
    category        : null,
    from_number     : null,
    number_of_posts : null,
    title           : null,
    contents        : null,
    user_name       : null,
    user_id         : null
}
const getNextPage = (callback) => {
    db.getConnection((err, conn) => {
        conn.query(
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
const addPost = (callback) => {
    db.getConnection((err, conn) => {
        conn.query(
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
    getNextPage : getNextPage,
    addPost     : addPost
}