import express from 'express'
import controller from './authController.js'

const router = express.Router();

<<<<<<< HEAD
router.get('/authLogin', controller.getUserAuth)
=======
router.get('/userAuth', controller.getUserAuth)

>>>>>>> e78fa5904093a92a906c4b54da72f590c881d741
module.exports = router;