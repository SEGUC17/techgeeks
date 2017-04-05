var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
//var document = require("document")
//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: true }));


router.get("/comparisonpage", function(req, res) {
    res.render("comparisonpage.ejs");
});


module.exports = router;