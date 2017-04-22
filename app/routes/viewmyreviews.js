var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

//REQUIRE Gym MODEL
var Reviews = require("../models/reviewmodel")

router.get('/viewmyreviews', function(req, res) {
    Reviews.find({}, function(err, reviews) {
        if (err) {
            res.send(err.message);
        } else if (reviews) {
            res.render('viewmyreviews', { x: reviews });
        }
    });
});
module.exports = router;