var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var uploadPhoto = require("../models/photos");

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/uploadPhoto', function(req, res) {
    res.render("uploadPhoto.html");
});

router.post('/uploadPhoto', function(req, res) {
    uploadPhoto.create({

        photo: req.body.photo
    }, function(err, uploadPhoto) {
        if (err) {
            console.log(err);
            res.redirect("/uploadPhoto")
        } else {
<<<<<<< HEAD
          console.log("photo is uploaded");
=======
            console.log(uploadPhoto.photo);
            console.log("Photo is Uploaded");
>>>>>>> 163cd446af9f8539df339f3dddda7c7da4a14a2c
            res.redirect("/uploadPhoto")
        }
    });

});

router.get("/client/:id")

module.exports = router;
