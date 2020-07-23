import express from 'express'
import controller from './userController.js'

const router = express.Router();

router.get('/userInfo', controller.getUserInfo)
router.post('/addUser', controller.addUser)
router.post('/checkuser_Id' , controller.checkuser_Id)
router.get('/certifyResult', controller.getCertifyResult)
router.get('/getJWT', controller.getJWT)
router.put('/logout', controller.logout)
module.exports = router;