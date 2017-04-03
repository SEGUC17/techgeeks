var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.get("/reserve", function(req, res) {
    res.render("reserve.ejs");
});

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/reserve', (function(req, res) {
   
}

));
module.exports = router; 