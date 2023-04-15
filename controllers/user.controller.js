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

module.exports = {
    login,
    createPatient,
    createDoctor,
    createState
}