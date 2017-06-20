const AuthenticationController = require('../controllers/authenticationController');
const chatsController = require('../controllers/chatsController');
const messagesController = require('../controllers/messagesController');
const usersController = require('../controllers/usersController');
const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

// Routes
function routes(app) {
  // Initializing route groups
  const apiRoutes = express.Router();
  const authRoutes = express.Router();
  const router = express.Router();

  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  //get routes
  router.get('/chats', chatsController.getNotes);
  router.get('/messages', messagesController.getNotebooks);
  router.get('/users', usersController.getTags);

  //gets by id
  // router.get('/messages/:_id', messageController.getMessageById);
  // router.get('/users/:_id', userController.getUsereById);

  // Set url for API group routes
  app.use('/api', apiRoutes);
};

module.exports - routes;
