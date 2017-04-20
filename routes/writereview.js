var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Gyms = require('../models/gymmodel');
var Review = require('../models/reviewmodel');
var Clients = require('../models/clientmodel');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/writereview', function(req, res) {
    res.render("writereviews.html");
});

router.post('/writereview', (function(req, res) {
    Gyms.findOne({ Name: req.body.writegym }, function(err, gym) {
        if (err) {
            res.send(failed);
        } else if (gym) {
            Clients.findOne({ username: req.body.writeusername }, function(err, client) {
                if (err) {
                    console.log(err);
                    res.send(failed);
                } else if (client) {

                   var Review = require('../models/reviewmodel');

                    Review.create({Username:req.body.writeusername, Name: req.body.writegym, Reviews: req.body.writereview, Ratings: req.body.writeratings },
                     function(err, Review) {
                        if (err) {
                            console.log(err);
                            res.send("failed");

                        } else {
                            res.redirect('/reviewdone');
                        }
                    })

                } else {
                    res.send("Please enter your correct username");
                }
            })

        } else {
            res.send("We don't offer that gym to write about");
        }
    });




}));


router.get("/client/:id")


module.exports = router;
