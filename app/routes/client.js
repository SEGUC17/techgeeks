var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//REQUIRING CLIENT MODEL
var User = require("../models/clientmodel");
// LOGGIN IN BY SEARCHING FOR USER IN THE DATABASE
router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, user) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
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
                error: 'User already exist',
                data: null
            });
        }
    });
});

module.exports = router;