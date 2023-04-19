var express = require('express');
var medicalCenter = require('../controllers/medicalCenter.controller');

var api = express.Router();

api.post('/createCentroMedico',medicalCenter.create);
api.post('/insertMedicamento',medicalCenter.insertMedicine);
api.post('/insertMaterial',medicalCenter.insertMaterial);

api.get('/getCentrosMedicos',medicalCenter.getMedicalCenters);

module.exports = api;