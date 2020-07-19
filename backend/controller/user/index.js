import express from 'express'
import controller from './userController.js'

const router = express.Router();

router.get('/userInfo', controller.getUserInfo)
router.post('/addUser', controller.addUser)
module.exports = router;