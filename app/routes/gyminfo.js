var express = require("express");
var router = express.Router();
var Gyms = require("../models/gymmodel")

router.get('/gyminfo', function(req, res) {
    Gyms.findOne({}, function(err, gyms) {
        if (err) {
            return res.status(500).json({
                error: 'Interal server error',
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