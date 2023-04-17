var express = require('express');
var userController = require('../controllers/user.controller');

var api = express.Router();

api.post('/login',userController.login);
api.post('/createPaciente',userController.createPatient);
api.post('/createMedico',userController.createDoctor);
api.post('/createEstado',userController.createState);
api.get('/getResumenExpediente',userController.getSummaryFile);

module.exports = api;