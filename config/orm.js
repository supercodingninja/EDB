const connection = require("./connection");

const orm = {
    selectAll: function () {
        connection.query("SELECT * FROM BigTimeEst_Burgers", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        })
    }
};

module.exports = orm;