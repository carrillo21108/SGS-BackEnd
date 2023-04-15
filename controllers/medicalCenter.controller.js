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

function insertMedicine(req,res){
    var params = req.body;
    client.query("INSERT INTO Inventario_Medicamento VALUES ($1,$2,$3,$4)",[params.id_centro_medico,parseInt(params.id_medicamento),parseInt(params.disponibilidad),params.fecha_caducidad])
    .then(response => {
        res.send({message:"Medicamento insertado con exito en el centro medico."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function insertMaterial(req,res){
    var params = req.body;
    client.query("INSERT INTO Inventario_Material VALUES ($1,$2,$3)",[params.id_centro_medico,parseInt(params.id_material),parseInt(params.disponibilidad)])
    .then(response => {
        res.send({message:"Material insertado con exito en el centro medico."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

module.exports = {
    create,
    insertMedicine,
    insertMaterial
}