var express = require('express');
var condition = require('../controllers/record.controller');

var api = express.Router();

api.post('/createIncidencia',condition.createIncidence);
api.post('/createHistorial_Enfermedad',condition.createDiseaseRecord);
api.post('/createHistorial_Adiccion',condition.createAddictionRecord);
api.post('/createHistorial_Examen',condition.createExamRecord);
api.post('/createHistorial_Cirugia',condition.createSurgeryRecord);
api.post('/createHistorial_Tratamiento',condition.createTreatmentRecord);

module.exports = api;