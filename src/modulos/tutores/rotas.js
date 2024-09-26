const express = require("express");

const router = express.Router();

router.get("/", function(req, res){
    res.send('Tutores')
});

module.exports = router;