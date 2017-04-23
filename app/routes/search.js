var express = require("express");
var router = express.Router();
var Gyms = require("../models/gymmodel")

router.post('/search', function(req, res) {
    Gyms.findOne({ $and: [{ $or: [{ Name: req.body.gymname }, { Price: req.body.gymprice }, { Location: req.body.gymlocation }] }] }, function(err, gyms) {
        if (err) {
            return res.status(500).json({
                error: 'Interal server error',
                data: null
            });
        } else if (gyms) {
            return res.json({
                error: null,
                data: gyms
            });
        }
    });
});

module.exports = router;