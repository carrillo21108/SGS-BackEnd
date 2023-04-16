var client = require('../connection');

function createIncidence(req,res){
    var params = req.body;
    client.query("CALL createIncidencia($1,$2,$3,$4,$5,$6)",[parseFloat(params.imc).toFixed(2),parseFloat(params.altura).toFixed(2),parseFloat(params.peso).toFixed(2),parseInt(params.no_paciente),params.no_colegiado,params.id_centro_medico])
    .then(response => {
        res.send({message:"Incidencia creada con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

module.exports = {
    createIncidence
}