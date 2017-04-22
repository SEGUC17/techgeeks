var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var Gyms = require("../models/gymmodel")

router.get('/gyminfo', function(req, res) {
    Gyms.find({}, function(err, gyms) {
        if (err) {
            res.send(err.message);
        } else if (gyms) {
            res.render('gyminfo', { x: gyms });
        }
    });
});


module.exports = router;