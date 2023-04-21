var express = require('express');
var material = require('../controllers/material.controller');

var api = express.Router();

api.post('/createMaterial',material.create);

api.get('/getMateriales',material.getMaterials);

module.exports = api;