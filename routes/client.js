var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var User = require("../models/clientmodel")

//REQUIRE MODELS

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/login", function(req, res) {
    res.render("login.html");
});

router.get("/loginfail", function(req, res) {
    res.render("loginfail.html");
});

router.post('/login', (function(req, res) {
    User.find({ Email: req.body.uemail, password: req.body.psw }, function(err, user) {
        if (err) {
            res.send(err.message);
            res.redirect("loginfail.html");
        }
        if (user) {
            res.render('homepageclient.html', { x: user });
        } else {
            res.render("loginfail.html");
        }
    })
}));



module.exports = router;
