var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")

router.get('/allgyms', (function(req, res) {
    Gyms.find({}, function(err, gyms) {
        if (err) {
            res.send(err.message);
            res.render("homepage.html");
        } else if (gyms) {
            res.render('allgyms.html', { x: gyms });
        }
    });
}));

module.exports = router;