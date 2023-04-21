var express = require('express');
var medicine = require('../controllers/medicine.controller');

var api = express.Router();

api.post('/createMedicamento',medicine.create);
api.post('/getInventarioMedicamentos',medicine.getInventoryMedicine);

api.get('/getMedicamentos',medicine.getMedicines);

api.post('/getMedicinasPorAgotarse',medicine.getMedicinesToRunOut);

module.exports = api;