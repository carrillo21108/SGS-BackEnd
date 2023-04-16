var express = require('express');
var condition = require('../controllers/record.controller');

var api = express.Router();

api.post('/createIncidencia',condition.createIncidence);

module.exports = api;