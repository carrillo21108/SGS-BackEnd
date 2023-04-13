var client = require('../connection');

function create(req,res){
    var params = req.body;
    client.query("INSERT INTO Centro_Medico VALUES ($1,$2)",[params.id_centro_medico,params.nombre])
    .then(response => {
        res.send({message:"Centro Medico creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

module.exports = {
    create
}