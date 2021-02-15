const express = require("express");
const router = express.Router();

// Get //
router.get("/", function(req, res) {
    res.json({
        message: 'EDB!'
    });
});

module.exports = router;