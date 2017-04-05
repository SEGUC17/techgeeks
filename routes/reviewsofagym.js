var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var Reviews = require("../models/reviewmodel")

//REQUIRE MODELS

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/reviewsofagym', (function(req, res) {
    Reviews.find({}, function(err, reviews) {
        if (err) {
            res.send(err.message);
            res.redirect("reviewfailed.ejs");
        }
        if (reviews) {
            res.render('reviewsofagym', { x: reviews });
        } else {
            res.render("reviewfailed.ejs");

        }
    })
}));

module.exports = router;