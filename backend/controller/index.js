import express from 'express'
import user from './user'
import posts from './posts'
import auth from './auth'
const apiRouter = express.Router();
apiRouter.use('/user', user)
apiRouter.use('/posts', posts)
apiRouter.use('/auth', auth)

module.exports = apiRouter;