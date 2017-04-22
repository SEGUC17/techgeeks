var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = require("../models/clientmodel");

router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, user) {
        if (err) {
            return res.status(500).json({
                error: 'Interal server error',
                data: null
            });
        }

        if (user) {
            return res.json({
                error: null,
                data: user
            });
        } else {
            return res.status(404).json({
                error: 'User not found',
                data: null
            });
        }
    });
});

module.exports = router;