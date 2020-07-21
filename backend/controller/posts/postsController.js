import dao from '../../model/mysql/postDAO';
import {asyncWrapper} from '../../lib/helper'
const getNextPage = asyncWrapper(async (req, res) => {
    dao.params.category = req.query.category;
    dao.params.from_number = parseInt(req.query.from_number);
    dao.params.number_of_posts = 20;
    const result = await dao.getNextPage();
    let   count  = 0
    if(result[0]) count = result[0]['counts'] 
    res.json({'result':result, 'count':count});
})
const getPost = asyncWrapper(async (req, res) => {
    dao.params.post_id = req.query.post_id;
    const result = await dao.getPost();
    res.json({'result': result})
})
const addPost = asyncWrapper(async (req, res) => {
    dao.params.title     = req.body.title;
    dao.params.category  = req.body.category;
    dao.params.contents  = req.body.contents;
    dao.params.user_name = req.body.user_name;
    dao.params.user_id   = req.body.user_id;
    const result = await dao.addPost();
    if(req.files.length){
        dao.params.post_id = result.insertId
        let fileResult = []
        for(const file of req.files){
            dao.params.file_name = file.originalname
            dao.params.file_path = file.path
            fileResult.push(await dao.addFile())
        }
        res.json({'result': result, 'fileResult': fileResult});
    }else{
        res.json({'result': result});
    }
})
const getFiles = asyncWrapper(async(req, res) => {
    dao.params.post_id = req.query.post_id;
    const result = await dao.getFiles();
    res.json({'result': result});
})
const editPost = asyncWrapper(async(req, res) => {
    dao.params.title     = req.body.title;
    dao.params.category  = req.body.category;
    dao.params.contents  = req.body.contents;
    dao.params.user_name = req.body.user_name;
    dao.params.user_id   = req.body.user_id;
    dao.params.post_id   = req.body.post_id;
    const result = await dao.editPost();
    if(req.files.length){
        dao.params.post_id = req.body.post_id;
        let fileResult = []
        for(const file of req.files){
            dao.params.file_name = file.originalname
            dao.params.file_path = file.path
            fileResult.push(await dao.addFile())
        }
        res.json({'result': result, 'fileResult': fileResult});
    }else{
        res.json({'result': result});
    }
})
const removePost = asyncWrapper(async(req, res) => {
    dao.params.post_id   = req.query.post_id;
    const result = await dao.removePost();
    res.json({'result': result});
})
module.exports = {
    getNextPage : getNextPage,
    getPost     : getPost,
    addPost     : addPost,
    getFiles    : getFiles,
    editPost    : editPost,
    removePost  : removePost
}