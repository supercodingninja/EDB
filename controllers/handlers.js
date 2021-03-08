const router = require("express").Router();

// Importing the model (burger.js) to use its database functions. //
const burger =require('../models/burger');

// router.get("/api/burgers",function(req, res) {
//     burger.selectAll (function(data) {
       
        

//         res.json(data);
//     });
// });


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


// UPDATE (C. R. U. D.: UPDATE) //
router.update("/api/burgers", function(req, res) {
    
    burger.updateOne(
        
         req.body,
        
        function(result) {
      
            // Send back the ID of the new burger. //
            res.json({ id: result.updateId });
        }
    );
});


// DELETE (C. R. U. D.: DELETE) //
router.delete("/api/burgers", function(req, res) {
    
    burger.deleteOne(
        
         req.body,
        
        function(result) {
      
            // Send back the ID of the new burger. //
            res.json({ id: result.insertId });
        }
    );
});

module.exports = router;