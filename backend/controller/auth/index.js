import express from 'express'
import controller from './authController.js'

const router = express.Router();

router.get('/userAuth', controller.getUserAuth)
module.exports = router;