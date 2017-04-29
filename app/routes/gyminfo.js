var express = require("express");
var router = express.Router();
//require gym model
var Gyms = require("../models/gymmodel")

router.get('/gyminfo', function(req, res) {
    //looping through gym's database
    Gyms.find({}, function(err, gyms) {
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
        };
    });
})

module.exports = router;