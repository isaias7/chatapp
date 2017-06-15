const express = require('express');
const router = require('express').Router();
const { catchErrors } = require('../handlers/errorHandlers');

const chatsController = require('../controllers/chatsController');
const messagesController = require('../controllers/messagesController');
const usersController = require('../controllers/usersController');

// router.get('/chats', chatsController.getNotes);
// router.get('/messages', messagesController.getNotebooks);
// router.get('/users', usersController.getTags);

// router.post('/chats', chatsController.createNotes);
// router.post('/messages', messagesController.createNotebooks);
// router.post('/users', usersController.createTags);

// router.delete('/chats/:id', chatsController.deleteNote);
// router.delete('/messages/:id', messagesController.deleteNotebook);
// router.delete('/users/:id', usersController.deleteTag);

// router.put('/chats/:id', chatsController.updateNote);
// router.put('/messages/:id', messagesController.updateNotebook);
// router.put('/users/:id', usersController.updateTag);

router.get('/', (request, response) => {
    //console.log('HIIII');
    response.send('Hello World');
});

module.exports = router;
