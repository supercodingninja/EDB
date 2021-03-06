const router = require("express").Router();

// Importing the model (burger.js) to use its database functions. //
const burger =require('../models/burger');

router.get("/api/burgers",function(req, res) {
    burger.selectAll (function(data) {
       
        

        res.json(data);
    });
});


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
        
        function(results) {
          console.log("result ",results)
            // Send back the ID of the new burger. //
            res.json(results);
        }
    );
});


// UPDATE (C. R. U. D.: UPDATE) //
router.put("/api/burgers/:id", function(req, res) {
    
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
     
        devoured: req.body.devoured
    },
    
    condition, function(result) {
      
        
        
        res.status(200).end() 
    });
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