const mySQL = require('mysql');

let connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root1',
    password: '',
    database: 'EDB_db'
});

connection.connect();

module.exports = connection;