var express = require("express");
var router = express.Router();
var Gyms = require("../models/gymmodel");
//ADDING GYMS INTO DATABASE
router.post('/addgym', function(req, res) {
        Gyms.create({
            Name: req.body.name,
            Location: req.body.location,
            Email: req.body.email,
            Telephone: req.body.telephone,
            Openinghours: req.body.hours,
            Price: req.body.price
        }, function(err, gyms) {
            if (err) {
                return res.status(500).json({
                    error: 'Internal server error',
                    data: gyms
                });
            } else if (gyms) {
                return res.json({
                    error: null,
                    data: gyms
                });
            }
        });
    }),

    module.exports = router;