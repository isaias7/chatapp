const authenticationController = require('../controllers/authenticationController');
const chatsController = require('../controllers/chatsController');
const messagesController = require('../controllers/messagesController');
const usersController = require('../controllers/usersController');
const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

//Routes
function routes(app) {
    // Initializing route groups
    const apiRoutes = express.Router();
    const authRoutes = express.Router();
    const router = express.Router();

    // apiRoutes.use('/routes', router);
    apiRoutes.use('/auth', authRoutes); 
    authRoutes.post('/register', authenticationController.register);
    authRoutes.post('/login', requireLogin, authenticationController.login);
    // router routes
    router.get('/chats', chatsController.getChats);
    router.get('/messages', messagesController.getMessages);
    router.get('/users', usersController.getUsers);
    // Gets by id
    // router.get('/messages/:_id', messageController.getMessageById);
    // router.get('/users/:_id', userController.getUsereById);


    // Set url for API group routes
    app.use('/api', apiRoutes);
};

module.exports = routes;
