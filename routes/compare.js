var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/compare", function(req, res) {
    res.render("compare.ejs");
});

router.get("/comparisonpage", function(req, res) {
    res.render("comparisonpage.ejs");
});

router.get("/comparisonfailed", function(req, res) {
    res.render("comparisonfailed.ejs");
});

router.post('/compare', (function(req, res) {
        Gyms.findOne({ Name: req.body.name1, Name: req.body.name2 }, function(err, gyms) {
            if (err) {
                res.send(err.message);
                res.render("comparisonfailed.ejs");
            }

            if (gyms) {
                console.log(gyms);
                res.render("comparisonpage.ejs", { x: gyms });
            } else {
                console.log("error");
                res.render("comparisonfailed.ejs");
            }
        })
    }

));


module.exports = router;