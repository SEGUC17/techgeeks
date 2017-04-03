var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");


router.use(bodyParser.urlencoded({ extended: false }));

router.get("/viewaccount", function(req, res) {
    res.render("homepageclient.ejs");
});

router.get("/viewaccinfo", function(req, res) {
    res.render("accountinformation.ejs");

});

router.get("/viewactivities", function(req, res) {
    res.render("myactivities.ejs");

});

module.exports = router; 