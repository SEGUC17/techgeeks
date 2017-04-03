var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var reviews = require("../models/rating");

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/reviews', function(req, res) {
    res.render("reviews.ejs");
});
router.post('/reviews', function(req, res) {
    res.render("reviews.ejs");
    
});
router.post('/reviews', function(req, res) {
    reviews.create({

        rating: req.body.rating
    }, function(err, reviews) {
        if (err) {
            console.log(err);
            res.redirect("/reviews")
        } else {
            console.log(reviews.rating);


        }
    });

});

router.get("/client/:id")

module.exports = router;