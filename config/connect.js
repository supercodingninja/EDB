var mySQL = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tacoma21!',
    database: 'EDB_db'
});

connection.connect();

module.exports = connection;