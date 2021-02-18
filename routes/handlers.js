const express = require("express");
const router = express.Router();

const orm =require('../config/orm.js');

// Get //
router.get("/", function(req, res) {
    orm.selectAll (function(error, EDB) {
        if (error) {
            return res.status(501).json ({
                message: 'Unable to query the database.'
            });
        }
        console.log('Burgers: ', EDB);

        res.render("index", {Burgers});
    });
});

module.exports = router;