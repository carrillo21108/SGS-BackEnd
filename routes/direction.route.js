var express = require('express');
var direction = require('../controllers/direction.controller');

var api = express.Router();

api.post('/createDepartamento',direction.createDepartment);
api.post('/createMunicipio',direction.createMunicipality);
api.post('/createDireccionCentroMedico',direction.createDirectionMedicalCenter);
api.post('/createDireccionPersona',direction.createDirectionPerson);

api.get('/getDepartamentos',direction.getDepartments);
api.post('/getMunicipios',direction.getMunicipalities);

module.exports = api;