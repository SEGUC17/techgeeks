var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/comparisonpage", function(req, res) {
    res.render("comparisonpage.html");
});

<<<<<<< HEAD
module.exports = router;
=======

module.exports = router;
>>>>>>> 163cd446af9f8539df339f3dddda7c7da4a14a2c
