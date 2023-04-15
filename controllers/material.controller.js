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

module.exports = {
    create
}