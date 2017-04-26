//requiring 
var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var Gym = require('../models/gymmodel');
var Client = require('../models/clientmodel');
var Reservation = require('../models/reservemodel');

//post method to reserve a place in the gym

router.post('/reserve', (function(req, res) {
    Reservation.findOne({
        $and: [{ gname: req.body.gymName }, { username: req.body.username }]

    }, function(err, reservation) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        } else if (reservation) {
            return res.status(500).json({
                error: "You already reserved a place",
                data: null
            });
        } else {


            Gym.findOne({
                Name: req.body.gymName
            }, function(err, gym) {
                if (err) {
                    return res.status(500).json({
                        error: 'Interal server error',
                        data: null
                    });
                }

                if (gym) {
                    Client.findOne({ username: req.body.username }, function(err, client) {
                        if (err) {
                            return res.status(500).json({
                                error: 'Interal server error',
                                data: null
                            });
                        }

                        if (client) {
                            Reservation.create({
                                gname: req.body.gymName,
                                username: req.body.username
                            }, function(err, reservation) {
                                if (err) {
                                    return res.status(500).json({
                                        error: 'Interal server error',
                                        data: null
                                    });
                                } else {
                                    return res.json({
                                        error: null,
                                        data: reservation
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

//exporting the router
module.exports = router;