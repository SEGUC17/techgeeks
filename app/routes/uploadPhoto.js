var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var uploadPhoto = require("../models/photos");

router.post('/uploadPhoto', function(req, res) {
    uploadPhoto.create({

        photo: req.body.photo
    }, function(err, uploadPhoto) {
        if (err) {
            console.log(err);
            res.redirect("/uploadPhoto")
        } else {
            console.log("photo is uploaded");
            res.redirect("/uploadPhoto")
        }
    });

});

router.get("/client/:id")

module.exports = router;