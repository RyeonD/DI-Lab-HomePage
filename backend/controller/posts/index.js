import express from 'express'
import controller from './postsController.js'

const router = express.Router();

router.get('/posts', controller.getNextPage)
router.post('/post', controller.addPost)
module.exports = router;