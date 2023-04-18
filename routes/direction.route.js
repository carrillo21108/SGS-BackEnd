var express = require('express');
var direction = require('../controllers/direction.controller');

var api = express.Router();

api.post('/createDepartamento',direction.createDepartment);
api.post('/createMunicipio',direction.createMunicipality);
api.post('/createDireccionCentroMedico',direction.createDirectionMedicalCenter);
api.post('/createDireccionPersona',direction.createDirectionPerson);

module.exports = api;