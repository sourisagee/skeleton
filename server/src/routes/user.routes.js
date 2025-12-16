const userRouter = require('express').Router();
const UserController = require('../controllers/user.controller')

userRouter
  .get('/', UserController.getAllUsers)

userRouter
  .route('/:id')
  .get(UserController.getUserById)
  .post(UserController.updateUserById) 
  .delete(UserController.deleteUserById) 

module.exports = userRouter;
