var express = require('express');
var specialty = require('../controllers/specialty.controller');

var api = express.Router();

api.post('/createEspecialidad',specialty.create);

api.get('/getEspecialidades',specialty.getSpecialties);

module.exports = api;