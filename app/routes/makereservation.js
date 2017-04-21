var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var gym = require('../models/gymmodel');
var client = require('../models/clientmodel');
var reservation = require('../models/reservemodel');



router.get("/reserve", function(req, res) {
    res.render("index.html");
});

router.get("/reservesuccess", function(req, res) {
    res.render("reservationsuccess.ejs");
});

router.use(bodyParser.urlencoded({ extended: false }));

//http://localhost:3000/api/reserve
router.post('/reserve', (function(req, res) {
    gym.findOne({ Name: req.body.gname }, function(err, gym) {
        if (err) {
            res.send(failed);
        } else if (gym) {
            client.findOne({ username: req.body.username }, function(err, client) {
                if (err) {
                    console.log(err);
                    res.send(failed);
                } else if (client) {

                    var reservation = require('../models/reservemodel');

                    reservation.create({
                        gname: req.body.gname,
                        username: req.body.username,
                        mobilenumber: req.body.mobilenumber,
                    }, function(err, reservation) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.redirect("/reservesuccess");
                        }
                    })

                } else {
                    res.send("Please enter your correct username");
                }
            })

        } else {
            res.send("We don't offer that gym to reserve in");
        }
    });




}));


module.exports = router;