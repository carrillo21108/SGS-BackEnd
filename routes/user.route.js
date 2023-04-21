var express = require('express');
var userController = require('../controllers/user.controller');

var api = express.Router();

api.post('/login',userController.login);
api.post('/createPaciente',userController.createPatient);
api.post('/createMedico',userController.createDoctor);
api.post('/createEstado',userController.createState);

api.post('/getResumenExpediente',userController.getSummaryFile);
api.post('/getEnfermedadesIncidencia',userController.getDiseaseIncidence);
api.post('/getExamenesIncidencia',userController.getExamIncidence);
api.post('/getAdiccionesIncidencia',userController.getAddictionIncidence);
api.post('/getCirugiasIncidencia',userController.getSurgeryIncidence);
api.post('/getTratamientoIncidencia',userController.getTreatmentIncidence);
api.get('/getBitacoraHistorial',userController.getHistoryLog);
api.get('/getBitacoraTraspaso',userController.getTransferLog);

api.post('/getPaciente',userController.getPatient);
api.post('/getMedico',userController.getDoctor);
api.get('/getEstados',userController.getStates);
api.post('/getPosiblesPadres',userController.getPossibleParents);
api.get('/getMedicos',userController.getDoctors);

api.put('/transferPersona',userController.transferPerson);
api.put('/updatePaciente',userController.updatePatient);
api.put('/updateMedico',userController.updateDoctor);

module.exports = api;