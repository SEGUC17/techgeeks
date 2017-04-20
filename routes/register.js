var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var client = require("../models/clientmodel");
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/register", function(req, res) {
    res.render("register.html");
});

router.get("/registerfailed", function(req, res) {
    res.render("registerfailed.html");
});

router.post('/register', function(req, res) {
        client.create({
            username: req.body.username,
            Email: req.body.Email,
            password: req.body.psw,
            gender: req.body.gender,
            age: req.body.age,
            Governance:req.body.governance
        }, function(err, client) {
            if (err) {
                console.log(err);
                res.render("registerfailed")
            } else {
                res.redirect("/login");
            }
        });
    }),

    module.exports = router;
