var express = require('express');
var condition = require('../controllers/condition.controller');

var api = express.Router();

api.post('/createEnfermedad',condition.createDisease);
api.post('/createAdiccion',condition.createAddiction);
api.get('/getEnfermedades',condition.getDiseases);
api.get('/getAdicciones',condition.getAddictions);
api.get('/getTop10Enfermedades',condition.getTop10Diseases);

module.exports = api;