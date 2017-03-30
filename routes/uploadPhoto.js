var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


router.get('/', function(req, res) {
    res.render("uploadPhoto.ejs");
});
router.post('/uploadPhoto', function(req, res) {
    res.render("uploadPhoto.ejs");
});
router.post('/uploadPhoto', function(req, res) {
    uploadPhoto.create({

        Screenshots: req.body.photo
    }, function(err, uploadPhoto) {
        if (err) {
            console.log(err);
            res.redirect("/uploadPhoto.ejs")
        } else {
            console.log(uploadPhoto.photo);


        }
    });

});

router.get("/client/:id")

module.exports = router;
