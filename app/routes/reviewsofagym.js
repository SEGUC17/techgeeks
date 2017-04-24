var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Reviews = require("../models/reviewmodel")

router.get('/reviewsofagym', function(req, res) {
    Reviews.find({}, function(err, reviews) {
        if (err) {
            return res.status(500).json({
                error: 'Interal server error',
                data: null
            });
        } else if (reviews) {
            return res.json({
                error: null,
                data: reviews
            });
        }
    });
});
module.exports = router;