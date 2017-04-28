var express = require("express");
var router = express.Router();
var Gyms = require("../models/gymmodel");
//ADDING GYMS INTO DATABASE
router.post('/addgyms', function(req, res) {
        Gyms.create({
            Name: req.body.Name,
            Location: req.body.Location,
            Email: req.body.Email,
            Telephone: req.body.Telephone,
            Openinghours: req.body.Openinghours,
            Price: req.body.Price
        }, function(err, gyms) {
            if (err) {
                return res.status(500).json({
                    error: 'Internal server error',
                    data: null
                });
            } else {
                return res.json({
                    error: null,
                    data: gyms
                });
            }
        });
    }),

    module.exports = router;