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

function createPaciente(req,res){
    var params = req.body;
    client.query("CALL createPaciente($1,$2,$3,$4,$5,$6)",[params.cui,params.nombre,params.apellidos,params.direccion,params.telefono,params.id_centro_medico])
    .then(response => {
        res.send({message:"Paciente creado con exito."});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({message:'Error general'});
    })
}

function createMedico(req,res){
    var params = req.body;
    client.query("INSERT INTO Persona ")
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

module.exports = {
    login,
    createPaciente,
    createMedico
}