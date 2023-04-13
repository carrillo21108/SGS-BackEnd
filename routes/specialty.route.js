var express = require('express');
var specialty = require('../controllers/specialty.controller');

var api = express.Router();

api.post('/createEspecialidad',specialty.create);

module.exports = api;