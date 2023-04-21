var express = require('express');
var medicine = require('../controllers/medicine.controller');

var api = express.Router();

api.post('/createMedicamento',medicine.create);
api.get('/getMedicamentos',medicine.getMedicines);

module.exports = api;