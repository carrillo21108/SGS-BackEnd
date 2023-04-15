var client = require('../connection');

function createDepartment(req,res){
    var params = req.body;
    client.query("INSERT INTO Departamento(nombre) VALUES ($1)",[params.nombre])
    .then(response => {
        res.send({message:"Departamento creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createMunicipality(req,res){
    var params = req.body;
    client.query("INSERT INTO Municipio(nombre,id_departamento) VALUES ($1,$2)",[params.nombre,parseInt(params.id_departamento)])
    .then(response => {
        res.send({message:"Municipio creada con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createDirection(req,res){
    var params = req.body;
    client.query("INSERT INTO Direccion(id_centro_medico,descripcion,id_municipio) VALUES ($1,$2,$3)",[params.id_centro_medico,params.descripcion,parseInt(params.id_municipio)])
    .then(response => {
        res.send({message:"Direccion creada con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}


module.exports = {
    createDepartment,
    createMunicipality,
    createDirection
}