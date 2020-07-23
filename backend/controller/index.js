import express from 'express';
import user from './user';
import posts from './posts';


const apiRouter = express.Router();
apiRouter.use('/user', user)
apiRouter.use('/posts', posts)

module.exports = apiRouter;