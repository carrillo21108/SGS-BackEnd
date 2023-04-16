'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 3000;
var userRoutes = require('./routes/user.route');
var medicalCenterRoutes = require('./routes/medicalCenter.route');
var specialtyRoutes = require('./routes/specialty.route');
var medicineRoutes = require('./routes/medicine.route');
var materialRoutes = require('./routes/material.route');
var directionRoutes = require('./routes/direction.route');
var conditionRoutes = require('./routes/condition.route');
var practiceRoutes = require('./routes/practice.route');
var recordRoutes = require('./routes/record.route');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(port);
console.log('Server Started on Port 3000');

app.use(userRoutes);
app.use(medicalCenterRoutes);
app.use(specialtyRoutes);
app.use(medicineRoutes);
app.use(materialRoutes);
app.use(directionRoutes);
app.use(conditionRoutes);
app.use(practiceRoutes);
app.use(recordRoutes);

module.exports = app;