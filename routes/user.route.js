var express = require('express');
var userController = require('../controllers/user.controller');

var api = express.Router();

api.post('/login',userController.login);
api.post('/createPaciente',userController.createPaciente);
api.post('/createMedico',userController.createMedico);

module.exports = api;