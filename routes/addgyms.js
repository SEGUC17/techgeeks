var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
//REQUIRE GYM MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/addgyms", function(req, res) {
    res.render("addgyms.html");
});

router.post('/addgyms', function(req, res) {
        Gyms.create({
            Name: req.body.name,
            Location: req.body.location,
            Email: req.body.email,
            Telephone: req.body.telephone,
            Openinghours: req.body.hours,
            Price: req.body.price,

        }, function(err, gyms) {
            if (err) {
                res.redirect("/addgyms")
            } else {
                res.redirect("/addgyms");
            }
        });
    }),
    module.exports = router;
