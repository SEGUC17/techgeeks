var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Gyms = require('../models/gymmodel');
var Review = require('../models/reviewmodel');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/writereview', function(req, res) {
    res.render("writereviews.ejs");
});

router.post('/writereview', (function(req, res) {

    Gyms.findOne({ Name: req.body.writegym },
        function(err, Gyms) {
            if (err) {
                console.log(err.message);
                res.send(failed);
            } else if (Gyms) {
                var Review = require('../models/reviewmodel');

                Review.create({ Name: req.body.writegym, Reviews: req.body.writereview, Ratings: req.body.writeratings },
                    function(err, Review) {
                        if (err) {
                            console.log(err)
                            res.send("failed");
                        } else {
                            console.log(Review);
                            console.log("yes");
                            res.redirect('/reviewdone');

                        }
                    })
            }
        })
}));

router.get("/client/:id")


module.exports = router;