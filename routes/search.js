var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/search", function(req, res) {
    Gyms.find({ Name: req.body.name }, function(err, gyms) {
        if (err) {
            res.send(err.message);
        } else {
            console.log("rendering");
            res.render('search', { x: gyms });
        }
    });
});

module.exports = router;