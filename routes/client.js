var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

//REQUIRE MODELS

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/login", function(req, res) {
    res.render("login.ejs");
});

router.get("/loginsuccess", function(req, res) {
    res.render("loginsuccess.ejs");
});

router.get("/loginfail", function(req, res) {
    res.render("loginfail.ejs");
});

router.post('/login', (function(req, res) {
    User.findOne({ email: req.body.email, password: req.body.password })
    if (err) {
        res.send(err.message);
        res.redirect("loginfail.ejs");
    }
    if (user) {
        console.log(user);
        res.render("loginsuccess.ejs");
    } else { res.render("loginfail.ejs"); }
}))

module.exports = router;