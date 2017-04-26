var express = require("express");
var router = express.Router();

//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")

router.get('/allgyms', (function(req, res) {
    Gyms.find({}, function(err, gyms) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        } else if (gyms) {
            return res.json({
                error: null,
                data: gyms
            });
        } else {
            return res.status(500).json({
                error: 'This gym doesnt exist',
                data: null
            });
        }
    });
}));

module.exports = router;