const apiRouter = require('express').Router();
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter)

module.exports = apiRouter;
