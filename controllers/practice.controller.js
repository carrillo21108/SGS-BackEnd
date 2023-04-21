var client = require('../connection');

function createExam(req,res){
    var params = req.body;
    client.query("INSERT INTO Examen(nombre,informacion) VALUES ($1,$2)",[params.nombre,params.informacion])
    .then(response => {
        res.send({message:"Examen creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createSurgery(req,res){
    var params = req.body;
    client.query("INSERT INTO Cirugia(nombre,descripcion) VALUES ($1,$2)",[params.nombre,params.descripcion])
    .then(response => {
        res.send({message:"Cirugia creada con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getExams(req,res){
    client.query("SELECT * FROM Examen")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getSurgeries(req,res){
    client.query("SELECT * FROM Cirugia")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

module.exports = {
    createExam,
    createSurgery,
    getExams,
    getSurgeries
}