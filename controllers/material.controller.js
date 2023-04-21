var client = require('../connection');

function create(req,res){
    var params = req.body;
    client.query("INSERT INTO Material (descripcion) VALUES ($1)",[params.descripcion])
    .then(response => {
        res.send({message:"Material creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getMaterials(req,res){
    client.query("SELECT * FROM nombre_materiales()")
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getInventoryMaterials(req,res){
    var params = req.body;
    client.query("SELECT * FROM inventario_materiales($1)",[params.id_centro_medico])
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
    getMaterials,
    getInventoryMaterials
}