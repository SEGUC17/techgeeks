var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: false }));
router.get('/comparisonpage', function(req, res) {
    console.log("getting comparison page");
    Gyms.find({}, function(err, gyms) {
        if (err) {
            res.send(err.message);
        } else {
            console.log("rendering");
            res.render('comparisonpage', { x: gyms });
        }
    });
});
module.exports = router;