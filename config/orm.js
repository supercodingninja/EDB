// Import MySQL connection. //
const connection = require("./connect.js");

// Object for all our SQL statement functions. //
const orm = {
    selectAll: function (table, cb) {
        
        connection.query("SELECT * FROM "+table, function (err, data) {
            
          
            
            cb(data);
        });
    },

    // selectAll() method. //
    selectAllBy: function(condition, value, cb) {
    
        const sqlQuery = `SELECT * FROM BigTimeEst_Burgers WHERE ${condition } = ${value}`;
    
        connection.query(sqlQuery, function (err, data) {
    
            if (err) cb(err, null);
    
            cb(null, data)
        });
    },
    
    // insertOne() method. //
    insertOne: function (table, body, cb) {
    
        const sqlQuery = `INSERT INTO ?? SET ? `;
  
    const statement=    connection.query(sqlQuery,[table, body], function (err, data) {
    
            if (err) throw err,
    
            cb(data);
        });

        console.log(statement.sql)
    },
    
    // updateOne() method. //
    updateOne: function (condition, id, cb) {
    
        const sqlQuery = `UPDATE BigTimeEst_Burgers SET not_devoured = ${condition} WHERE id = ${id}`;
    
        connection.query(sqlQuery, function (err, data) {
    
            if (err) cb(err, null);
    
            cb(null, data)
        });
    },
    
    // deleteOne() method. //
    deleteOne: function(id, cb) {
    
        const sqlQuery = `DELETE FROM BigTimeEst_Burgers WHERE id = ${id}`;
    
        connection.query(sqlQuery, function (err, data) {
    
            if (err) cb(err, null);
    
            cb(null, data)
        });
    }
};

module.exports = orm;