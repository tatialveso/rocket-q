const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-room', (req, res) => res.render("index", {page: 'create-room'}));
route.get('/room/:room', RoomController.open);

route.post('/question/:room/:question/:action', QuestionController.index);
route.post('/create-room', RoomController.create);
route.post ('/question/create/:room', QuestionController.create);
route.post('/enter-room', RoomController.enter);

module.exports = route;