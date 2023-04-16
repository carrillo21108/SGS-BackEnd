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

function createDiseaseRecord(req,res){
    var params = req.body;
    client.query("INSERT INTO Historial_Enfermedad VALUES($1,$2)",[parseInt(params.id_incidencia),parseInt(params.id_enfermedad)])
    .then(response => {
        res.send({message:"Registro en Historial_Enfermedad creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createAddictionRecord(req,res){
    var params = req.body;
    client.query("INSERT INTO Historial_Adiccion VALUES($1,$2)",[parseInt(params.id_incidencia),parseInt(params.id_adiccion)])
    .then(response => {
        res.send({message:"Registro en Historial_Adiccion creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createExamRecord(req,res){
    var params = req.body;
    client.query("INSERT INTO Historial_Examen VALUES($1,$2)",[parseInt(params.id_incidencia),parseInt(params.id_examen)])
    .then(response => {
        res.send({message:"Registro en Historial_Examen creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createSurgeryRecord(req,res){
    var params = req.body;
    client.query("INSERT INTO Historial_Cirugia VALUES($1,$2)",[parseInt(params.id_incidencia),parseInt(params.id_cirugia)])
    .then(response => {
        res.send({message:"Registro en Historial_Cirugia creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createTreatmentRecord(req,res){
    var params = req.body;
    client.query("INSERT INTO Historial_Tratamiento VALUES($1,$2,$3)",[parseInt(params.id_incidencia),parseInt(params.id_medicamento),params.dosis])
    .then(response => {
        res.send({message:"Registro en Historial_Tratamiento creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}


module.exports = {
    createIncidence,
    createDiseaseRecord,
    createAddictionRecord,
    createExamRecord,
    createSurgeryRecord,
    createTreatmentRecord
}