import express from 'express'
import controller from './userController.js'

const router = express.Router();

router.get('/userInfo', controller.getUserInfo)

module.exports = router;