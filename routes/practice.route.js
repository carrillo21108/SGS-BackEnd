var express = require('express');
var condition = require('../controllers/practice.controller');

var api = express.Router();

api.post('/createExamen',condition.createExam);
api.post('/createCirugia',condition.createSurgery);

api.get('/getExamenes',condition.getExams);
api.get('/getCirugias',condition.getSurgeries);

module.exports = api;