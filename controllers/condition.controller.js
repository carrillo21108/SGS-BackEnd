var client = require('../connection');

function createDisease(req,res){
    var params = req.body;
    client.query("INSERT INTO Enfermedad(nombre,informacion) VALUES ($1,$2)",[params.nombre,params.informacion])
    .then(response => {
        res.send({message:"Enfermedad creada con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createAddiction(req,res){
    var params = req.body;
    client.query("INSERT INTO Adiccion(nombre,informacion) VALUES ($1,$2)",[params.nombre,params.informacion])
    .then(response => {
        res.send({message:"Adiccion creada con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getDiseases(req,res){
    client.query("SELECT * FROM Enfermedad")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getAddictions(req,res){
    client.query("SELECT * FROM Adiccion")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getTop10Diseases(req,res){
    client.query("SELECT * FROM top_10_enfermedades()")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getTop10Doctors(req,res){
    client.query("SELECT * FROM top_10_medicos()")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getTop5Patients(req,res){
    var params = req.body;
    client.query("SELECT * FROM top_5_pacientes($1)",[params.id_centro_medico])
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getTop3Units(req,res){
    client.query("SELECT * FROM top_3_unidades()")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

module.exports = {
    createDisease,
    createAddiction,
    getDiseases,
    getAddictions,
    getTop10Diseases,
    getTop10Doctors,
    getTop5Patients,
    getTop3Units
}