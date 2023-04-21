var client = require('../connection');

function create(req,res){
    var params = req.body;
    client.query("INSERT INTO Medicamento (descripcion) VALUES ($1)",[params.descripcion])
    .then(response => {
        res.send({message:"Medicamento creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getMedicines(req,res){
    client.query("SELECT * FROM nombre_medicamentos()")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getInventoryMedicine(req,res){
    var params = req.body;
    client.query("SELECT * FROM inventario_medicamentos($1)",[params.id_centro_medico])
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getMedicinesToRunOut(req,res){
    var params = req.body;
    client.query("SELECT * FROM medicinas_agotarse($1)",[params.id_centro_medico])
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

module.exports = {
    create,
    getMedicines,
    getInventoryMedicine,
    getMedicinesToRunOut
}