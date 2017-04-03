var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var reservation = require('../models/reservemodel.js');

router.get("/reserve", function(req, res) {
    res.render("reserve.ejs");
});

router.get("/reservesuccess", function(req, res) {
    res.render("reservationsuccess.ejs");
});

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/reserve', (function(req, res) {

    reservation.create({

        gname: req.body.gname,
        name: req.body.name,
        mobilenumber: req.body.mobilenumber,

    }, function(err, reservation) {
        if (err) {
            console.log(err);
            res.send("Failed");
            console.log("can't be added");
            //res.redirect("/reserve");

        } else {
            console.log(reservation.name);
            console.log("==========");
            console.log(reservation.mobilenumber);
            res.redirect("/reservesuccess");
        }
    });
}));
module.exports = router;