const express = require('express');

const route = express.Router();

route.get('/', (req, res) => res.render("index"));
route.get('/room', (req,res) => res.render("room"));
route.get('/create-room', (req,res) => res.render("create-room"));

route.post('room/:room/:question/:action', QuestionController.index);

module.exports = route;