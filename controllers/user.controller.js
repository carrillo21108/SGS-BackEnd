var client = require('../connection');

function login(req,res){
    var params = req.body;

    client.query("SELECT usuario,clave FROM Medico WHERE usuario=$1 AND clave=$2",[params.usuario,params.clave])
    .then(response => {
        if(response.rows.length==0){
            res.send({message:"Contraseña y/o usuario incorrecto."});
        }else{
            res.send(response.rows);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createPatient(req,res){
    var params = req.body;
    client.query("CALL createPaciente($1,$2,$3,$4,$5,$6,$7)",[params.cui,params.nombre,params.apellidos,params.direccion,params.telefono,params.id_centro_medico,parseInt(params.id_estado)])
    .then(response => {
        res.send({message:"Paciente creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createDoctor(req,res){
    var params = req.body;
    client.query("CALL createMedico($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",[params.cui,params.nombre,params.apellidos,params.direccion,params.telefono,params.id_centro_medico,params.no_colegiado,parseInt(params.id_especialidad),params.usuario,params.clave])
    .then(response => {
        res.send({message:"Medico creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createState(req,res){
    var params = req.body;
    client.query("INSERT INTO Estado (descripcion) VALUES ($1)",[params.descripcion])
    .then(response => {
        res.send({message:"Estado creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getSummaryFile(req,res){
    var params = req.body;
    client.query("SELECT * FROM resumen_expediente($1)",[params.no_paciente])
    .then(response => {
        if(response.rows.length==0){
            res.send({message:"No existen registros."});
        }else{
            res.send(response.rows);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getDiseaseIncidence(req,res){
    var params = req.body;
    client.query("SELECT * FROM enfermedades_incidencia($1)",[params.id_incidencia])
    .then(response => {
        if(response.rows.length==0){
            res.send({message:"No existen registros."});
        }else{
            res.send(response.rows);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getExamIncidence(req,res){
    var params = req.body;
    client.query("SELECT * FROM examenes_incidencia($1)",[params.id_incidencia])
    .then(response => {
        if(response.rows.length==0){
            res.send({message:"No existen registros."});
        }else{
            res.send(response.rows);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getAddictionIncidence(req,res){
    var params = req.body;
    client.query("SELECT * FROM adicciones_incidencia($1)",[params.id_incidencia])
    .then(response => {
        if(response.rows.length==0){
            res.send({message:"No existen registros."});
        }else{
            res.send(response.rows);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getSurgeryIncidence(req,res){
    var params = req.body;
    client.query("SELECT * FROM cirugias_incidencia($1)",[params.id_incidencia])
    .then(response => {
        if(response.rows.length==0){
            res.send({message:"No existen registros."});
        }else{
            res.send(response.rows);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getTreatmentIncidence(req,res){
    var params = req.body;
    client.query("SELECT * FROM tratamiento_incidencia($1)",[params.id_incidencia])
    .then(response => {
        if(response.rows.length==0){
            res.send({message:"No existen registros."});
        }else{
            res.send(response.rows);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function getPatient(req,res){
    var params = req.body;
    client.query("SELECT * FROM Paciente WHERE cui=$1",[params.cui])
    .then(response => {
        if(response.rows.length==0){
            res.send({message:"No existe registro."});
        }else{
            res.send(response.rows);
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function transferPerson(req,res){
    var params = req.body;
    client.query("UPDATE Persona SET id_centro_medico = $2 WHERE cui = $1",[params.cui,params.id_centro_medico])
    .then(response => {
        res.send({message:"Persona transferida con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

module.exports = {
    login,
    createPatient,
    createDoctor,
    createState,
    getSummaryFile,
    getDiseaseIncidence,
    getExamIncidence,
    getAddictionIncidence,
    getSurgeryIncidence,
    getPatient,
    transferPerson,
    getTreatmentIncidence
}