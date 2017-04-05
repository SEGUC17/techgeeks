var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");


router.use(bodyParser.urlencoded({ extended: false }));

router.get("/viewactivities", function(req, res) {
    res.render("myactivities.ejs");

});

router.get("/viewreviews", function(req, res) {
    res.render("myreviews.ejs");

});

module.exports = router;