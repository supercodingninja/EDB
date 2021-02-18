const connection = require("./connect");

const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM BigTimeEst_Burgers", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },
    selectAllBy: function(condition, value, cb) {
        const sqlQuery = `SELECT * FROM BigTimeEst_Burgers WHERE ${condition } = ${value}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },
    insertOne: function (burgerName, cb) {
        const sqlQuery = `INSERT INTO BigTimeEst_Burgers(burger_name) VALUES('${burgerName}')`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    updateOne: function (condition, id, cb) {
        const sqlQuery = `UPDATE BigTimeEst_Burgers SET is_favorite = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },

    deleteOne: function(id, cb) {
        const sqlQuery = `DELETE FROM BigTimeEst_Burgers WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    }
};

module.exports = orm;