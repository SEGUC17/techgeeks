var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var User = require("../models/clientmodel")

//REQUIRE MODELS

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/login", function(req, res) {
    res.render("login.ejs");
});

router.get("/loginfail", function(req, res) {
    res.render("loginfail.ejs");
});

router.post('/login', (function(req, res) {
    User.find({ Email: req.body.uemail, password: req.body.psw }, function(err, user) {
        if (err) {
            res.send(err.message);
            res.redirect("loginfail.ejs");
        }
        if (user) {
            console.log(user);
            console.log("rendering");
            res.render('homepageclient.ejs', { x : user });
        } else { 
            res.render("loginfail.ejs");
        }
    })
}));

module.exports = router;
