// Sets MySQL connection. //
const mysql = require('mysql');

// STOP FORGETTING THIS!!! //
require('dotenv').config();

let connection;

if(process.env.JAWSDB_URL) {
    
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    
    connection = mysql.createConnection({
    
        host: 'localhost',
        
        port: 3306,
    
        user:  process.env.DB_USERNAME,
    
        password: process.env.DB_PASS,
    
        database: 'EDB_db',
    });
};


// Make connection. //
connection.connect(function(err){
    if(err) throw err;
    console.log("connections id", connection.threadId)
});

module.exports = connection;