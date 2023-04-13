var client = require('../connection');

function create(req,res){
    var params = req.body;
    client.query("INSERT INTO Especialidad(nombre) VALUES ($1)",[params.nombre])
    .then(response => {
        res.send({message:"Especialidad creada con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

module.exports = {
    create
}