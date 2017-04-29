var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
//REQUIRE Gym MODEL
var Gyms = require('../models/gymmodel');
//REQUIRE Reviews MODEL
var Review = require('../models/reviewmodel');
//REQUIRE Clients MODEL
var Clients = require('../models/clientmodel');
//WRITING REVIEWS ON THE GYMS



router.post('/writereview', (function(req, res) {
    Review.findOne({
        $and: [{ gname: req.body.gymName }, { username: req.body.username }]

    }, function(err, review) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        } else if (review) {
            return res.status(500).json({
                error: "You already subitted your review",
                data: null
            });
        } else {


            Gyms.findOne({
                Name: req.body.gymName
            }, function(err, gym) {
                if (err) {
                    return res.status(500).json({
                        error: 'Interal server error',
                        data: null
                    });
                }

                if (gym) {
                    Clients.findOne({ username: req.body.username }, function(err, client) {
                        if (err) {
                            return res.status(500).json({
                                error: 'Interal server error',
                                data: null
                            });
                        }

                        if (client) {
                            Review.create({
                                gname: req.body.gymName,
                                username: req.body.username
                            }, function(err, review) {
                                if (err) {
                                    return res.status(500).json({
                                        error: 'Interal server error',
                                        data: null
                                    });
                                } else {
                                    return res.json({
                                        error: null,
                                        data: review
                                        
                                    });
                                }
                            })

                        } else {
                            return res.status(404).json({
                                error: 'User not found',
                                data: null
                            });
                        }
                    });
                } else {
                    return res.status(404).json({
                        error: 'Gym not found',
                        data: null
                    });
                }
            });

        }
    })
}));



module.exports = router;


