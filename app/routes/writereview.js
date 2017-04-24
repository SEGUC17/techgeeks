var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var Gyms = require('../models/gymmodel');
var Review = require('../models/reviewmodel');
var Clients = require('../models/clientmodel');

router.post('/writereview', (function(req, res) {
    Gyms.findOne({ Name: req.body.gymName }, function(err, gym) {
        if (err) {
            res.status(500).json({
                error: 'Interal server error',
                data: null
            });

        } else if (gym) {
            Clients.findOne({ username: req.body.username }, function(err, client) {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        error: 'Interal server error',
                        data: null
                    });
                } else if (client) {

                    var Review = require('../models/reviewmodel');

                    Review.create({ Username: req.body.username, Name: req.body.gymName, Reviews: req.body.review, Ratings: req.body.rating },
                        function(err, Review) {
                            if (err) {
                                console.log(err);
                                res.status(500).json({
                                    error: 'Interal server error',
                                    data: null
                                });
                            } else {
                                return res.json({
                                    error: null,
                                    data: Review
                                });
                            }
                        })
                }
            })

        }
    });
}));

module.exports = router;