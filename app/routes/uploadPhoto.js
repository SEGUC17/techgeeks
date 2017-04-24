var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var uploadPhoto = require("../models/photos");
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
router.post('/uploadPhoto', function(req, res) {

        uploadPhoto.create({
            name: req.body.name,
            created: Date.now(),
            file: req.file

        }, function(err, photos) {
            if (err) {
                return res.status(500).json({
                    error: 'Interal server error',
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