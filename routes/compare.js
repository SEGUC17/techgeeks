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
        Gyms.findOne({ Name: req.body.name1, Name: req.body.name2 }, function(err, user) {
            if (err) {
                res.send(err.message);
                res.render("comparisonfailed.ejs");
            }
            if (user) {
                console.log(user);
                res.render("comparisonpage.ejs")
            } else {
                console.log("error");
                res.render("comparisonfailed.ejs");
            }
        })
    }

));
))
router.get('/comparisonpage', function(req, res) {
    console.log("getting comparison page");
    Gyms.find({}, function(err, gyms) {
        if (err) {
            res.send(err.message);
        } else {
            console.log("rendering");
            res.render('comparisonpage', { x: Gyms });
        }
    });
});

module.exports = router;