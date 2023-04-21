var client = require('../connection');

function create(req,res){
    var params = req.body;
    client.query("CALL createCentroMedico($1,$2,$3,$4)",[params.id_centro_medico,params.nombre,params.direccion,params.id_municipio])
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
    client.query("INSERT INTO Inventario_Medicamento VALUES ($1,$2,$3,$4,$5)",[params.id_centro_medico,parseInt(params.id_medicamento),parseInt(params.disponibilidad),params.fecha_caducidad,parseInt(params.capacidad_maxima)])
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

function getMedicalCenters(req,res){
    var params = req.body;
    client.query("SELECT * FROM Centro_Medico")
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
    insertMedicine,
    insertMaterial,
    getMedicalCenters
}