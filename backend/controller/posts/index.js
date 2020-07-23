import express from 'express'
import controller from './postsController.js'
import multer from 'multer'
import {v4 as uuidv4} from 'uuid'
import authMiddleware from '../middlewares/auth';

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

router.get('/posts', authMiddleware, controller.getNextPage)
router.get('/post', authMiddleware, controller.getPost)
router.get('/files', controller.getFiles)
router.post('/post', upload.array('files',70), authMiddleware, controller.addPost)
router.patch('/post', upload.array('files',70),authMiddleware, controller.editPost)
router.delete('/post', authMiddleware, controller.removePost)
router.get('/fileDownload', controller.fileDownload)
router.get('/filesDownload', controller.filesDownload)
module.exports = router;