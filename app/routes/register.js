var express = require("express");
var router = express.Router();
//REQUIRE Clients MODEL
var client = require("../models/clientmodel");
//REGISTER FOR A NEW GYM
router.post('/register', function(req, res) {
        client.create({
            username: req.body.username,
            Email: req.body.Email,
            password: req.body.password,
            gender: req.body.gender,
            age: req.body.age,
            Governance: req.body.Governance
        }, function(err, client) {
            if (err) {
                return res.status(500).json({
                    error: 'Interal server error',
                    data: null
                });
            } else if (client) {
                return res.json({
                    error: null,
                    data: client
                });
            } else {
                return res.status(404).json({
                    error: 'User already exists',
                    data: null
                });
            }
        });
    }),

    module.exports = router;