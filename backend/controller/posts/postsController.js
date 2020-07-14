import dao from '../../model/mysql/postDAO';
import {asyncWrapper} from '../../lib/helper'
const getNextPage = (req, res) => {
    dao.params.category = req.query.category;
    dao.params.from_number = parseInt(req.query.from_number);
    dao.params.number_of_posts = 20;
    dao.getNextPage((err, rows)=>{
        let count = 0
        if(rows[0]) count = rows[0]['counts']
        res.json({result:rows, count:count});
    });
}
const addPost = (req, res) => {
    dao.params.title     = req.body.title;
    dao.params.category  = req.body.category;
    dao.params.contents  = req.body.contents;
    dao.params.user_name = req.body.user_name;
    dao.params.user_id   = req.body.user_id;
    dao.addPost((err, rows)=>{
        res.json(rows);
    });
}
module.exports = {
    getNextPage:getNextPage,
    addPost: addPost
}