var express = require("express");
var router = express.Router();

//REQUIRE Gym MODEL
var Reviews = require("../models/reviewmodel")

//GETTING THE REVIEWS OF A CERTAIN USER
router.get('/viewmyreviews', function(req, res) {
    var username = req.query.username;

    Reviews.find({ Username: username }, function(err, reviews) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        }
        if (reviews.length === 0) {
            return res.status(404).json({
                error: 'Reviews not found',
                data: null
            });
        } else {
            return res.json({
                error: null,
                data: reviews
            });
        }
    });
});

module.exports = router;