const { Client } = require('pg')

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'sgs_db',
    password: 'admin',
    port: 5432,
}

const client = new Client(connectionData)
client.connect()
module.exports = client;