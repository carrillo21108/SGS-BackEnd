var express = require('express');
var medicine = require('../controllers/medicine.controller');

var api = express.Router();

api.post('/createMedicamento',medicine.create);

module.exports = api;