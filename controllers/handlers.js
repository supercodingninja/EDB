const express = require("express");
const router = express.Router();

const burger =require('../models/burger');

// Get //
router.get("/", function(req, res) {
    burger.selectAll (function(data) {
       

        res.render('index', {burgers:data});
    });
});

module.exports = router;