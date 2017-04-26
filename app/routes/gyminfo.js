var express = require("express");
var router = express.Router();
//require gym model
var Gyms = require("../models/gymmodel")

router.get('/gyminfo', function(req, res) {
    //looping through gym's database
    Gyms.findOne({}, function(err, gyms) {
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
            return res.status(404).json({
                error: 'This gym doesnt exist',
                data: null
            });
        };
    });
})

module.exports = router;