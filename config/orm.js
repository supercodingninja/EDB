const connection = require("./connect");

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
    insertOne: function (burgerName, cb) {
    
        const sqlQuery = `INSERT INTO BigTimeEst_Burgers(Burger_name) VALUES('${burgerName}')`;
    
        connection.query(sqlQuery, function (err, data) {
    
            if (err) cb(err, null);
    
            cb(null, data);
        });
    },
    
    // updateOne() method. //
    updateOne: function (condition, id, cb) {
    
        const sqlQuery = `UPDATE BigTimeEst_Burgers SET is_favorite = ${condition} WHERE id = ${id}`;
    
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