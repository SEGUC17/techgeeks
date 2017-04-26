var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var uploadPhoto = require("../models/photos");
var fs = require('fs');
router.post('/uploadPhoto', function(req, res) {
        // photo is created
        uploadPhoto.create({
            name: req.body.name,
            created: Date.now(),
            file: req.file
                // error handling
        }, function(err, photos) {
            if (err) {
                return res.status(500).json({
                    error: 'Internal server error',
                    data: null
                });
            } else {
                return res.json({
                    error: null,
                    data: photos
                });
            }
        });
    }),


    module.exports = router;