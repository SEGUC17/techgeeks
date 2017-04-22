var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var Reviews = require("../models/reviewmodel")
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/reviewsofagym', function(req, res) {
    Reviews.find({}, function(err, reviews) {
        if (err) {
            res.send(err.message);
        } else if (reviews) {
            res.render('reviewsofagym', { x: reviews });
        }
    });
});

router.post('/reviewsofagym', (function(req, res) {
    Reviews.findOne({Username : req.body.Name}, function(err, reviews) {
        if (err) {
            res.send(err.message);
            res.redirect("reviewfailed.ejs");
        }
       else if (reviews) {
            res.render('viewmyreviews', { x: reviews });
        }
    })
}));

module.exports = router;
