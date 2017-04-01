var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
//REQUIRE GYM MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/addgyms", function(req, res) {
    res.render("addgyms.ejs");
});

router.post('/addgyms', function(req, res) {
        Gyms.create({
            Name: req.body.name,
            Location: req.body.location,
            Email: req.body.email,
            Telephone: req.body.telephone,
            openinghours: req.body.hours,
        }, function(err, gyms) {
            if (err) {
                console.log(err);
                console.log("can't be added");
                res.redirect("/addgyms")
            } else {
                console.log(gyms.Name);
                console.log("==========");
                console.log(gyms.Email);
                res.redirect("/addgyms");
            }
        });
    }),
    module.exports = router;