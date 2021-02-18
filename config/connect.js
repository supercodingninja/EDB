const mySQL = require('mysql');

let connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tacoma21!',
    database: 'EDB_db'
});

connection.connect();

module.exports = connection;