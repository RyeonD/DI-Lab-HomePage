import express from 'express'
import controller from './postsController.js'
import multer from 'multer'
import {v4 as uuidv4} from 'uuid'
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/uploads')
    },
    filename:(req, file, cb) => {
        const fileType = file.originalname.split('.')
        cb(null, `${uuidv4()}.${fileType[fileType.length-1]}`)
    }
})
const upload = multer({storage:storage})
const router = express.Router();

router.get('/posts', controller.getNextPage)
router.get('/post', controller.getPost)
router.get('/files', controller.getFiles)
router.post('/post', upload.array('files',10),controller.addPost)
router.patch('/post', upload.array('files',10),controller.editPost)
router.delete('/post', controller.removePost)
module.exports = router;