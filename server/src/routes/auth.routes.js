const authRouter = require('express').Router();
const UserController = require('../controllers/user.controller');

authRouter
  .get('/:id', UserController.getUserById) 
  .get('/refreshTokens', UserController.refreshTokens)
  .post('/signUp', UserController.signUp)
  .post('/signIn', UserController.signIn)
  .delete('signOut', UserController.signOut);

module.exports = authRouter;
