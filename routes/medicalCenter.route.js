var express = require('express');
var medicalCenter = require('../controllers/medicalCenter.controller');

var api = express.Router();

api.post('/createCentroMedico',medicalCenter.create);

module.exports = api;