const router = require("express").Router();

// Import the model (burger.js) to use its database functions. //
const burger =require('../models/burger');


// Routes, and set up logic within those routes, where required. //
// Get (C. R. U. D.: READ) //
router.get("/", function(req, res) {
    burger.selectAll (function(data) {
       
        var hbsObject = {

            burgers: data
        };

        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});


router.get("/api/burgers",function(req, res) {
    burger.selectAll (function(data) {
       
        var hbsObject = {

            burgers: data
        };

        console.log(hbsObject);

        res.json(data);
    });
});


// Post (C. R. U. D.: CREATE) //
router.post("/api/burgers", function(req, res) {
    
    burger.insertOne(
        
         req.body,
        
        function(result) {
      
            // Send back the ID of the new burger. //
            res.json({ id: result.insertId });
        }
    );
});




module.exports = router;