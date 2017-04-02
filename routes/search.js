var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/search", function(req, res) {
    res.render("search.ejs");
});






module.exports = router;
