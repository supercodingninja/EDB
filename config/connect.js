const mySQL = require('mysql');

// STOP FORGETTING THIS!!! //
require('dotenv').config();

let connection;

if(process.env.JAWSDB_URL) {
    
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    
    connection = mysql.createConnection({
    
        host: 'localhost',
    
        user: 'root',
    
        password: 'Tacoma21!',
    
        database: 'EDB_db',

        port: process.env.db_port
    });
};

connection.connect();

module.exports = connection;