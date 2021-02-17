const express = require("express");
const router = express.Router();

const orm =require('../config/orm');

// Get //
router.get("/", function(req, res) {
    orm.selectAll (function(error, burgers) {
        if (error) {
            return res.status(501).json ({
                message: 'Unable to query the database.'
            });
        }
        res.render("index");
    });
});

module.exports = router;