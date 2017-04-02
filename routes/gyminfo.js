var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.get("/gyminfo", function(req, res) {
    res.render("gyminfo.ejs");
});


module.exports = router; 