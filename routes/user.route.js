var express = require('express');
var userController = require('../controllers/user.controller');

var api = express.Router();

api.post('/login',userController.login);
api.post('/createPaciente',userController.createPatient);
api.post('/createMedico',userController.createDoctor);
api.post('/createEstado',userController.createState);
api.get('/getResumenExpediente',userController.getSummaryFile);
api.get('/getEnfermedadesIncidencia',userController.getDiseaseIncidence);
api.get('/getExamenesIncidencia',userController.getExamIncidence);
api.get('/getAdiccionesIncidencia',userController.getAddictionIncidence);
api.get('/getCirugiasIncidencia',userController.getSurgeryIncidence);
api.get('/getTratamientoIncidencia',userController.getTreatmentIncidence);

api.get('/getPaciente',userController.getPatient);

api.put('/transferPersona',userController.transferPerson);

module.exports = api;