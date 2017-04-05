var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var Gyms = require("../models/gymmodel")

//REQUIRE MODELS

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/reviewsofagym", function(req, res) {
    res.render("reviewsofagym.ejs");
});

// router.get("/writethenametoshowreviews", function(req, res) {
//     res.render("writethenametoshowreviews.ejs");
// });

router.post('/reviewsofagym', (function(req, res) {
    Gyms.findOne({ Name: req.body.GymName}, function(err, gyms) {
        if (err) {
            res.send(err.message);
            res.redirect("reviewfailed.ejs");
        }
        if (gyms) {
            console.log(gyms);
             res.render('reviewsofagym', { x: gyms });
        } else {
            res.render("reviewfailed.ejs");

        }
    })
}));

module.exports = router;