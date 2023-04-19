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

module.exports = {
    createDisease,
    createAddiction,
    getDiseases,
    getAddictions
}