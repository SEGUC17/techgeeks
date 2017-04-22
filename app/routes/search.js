var express = require("express");
var router = express.Router();
var Gyms = require("../models/gymmodel")

router.post('/search', function(req, res) {
    Gyms.find({ $and: [{ $or: [{ Name: req.body.searchname }, { Price: req.body.searchprice }, { Location: req.body.searchaddress }] }] }, function(err, gyms) {
        if (err) {
            res.send(err.message);
        } else if (gyms) {
            res.render('gyminfo', { x: gyms });
        }
    });
});

module.exports = router;