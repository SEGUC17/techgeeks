var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/search", function(req, res) {
    res.render("search.ejs");
});
router.post('/search', function(req, res) {
    Gyms.find({ Name: req.body.searchname }, function(err, gyms) {
        if (err) {
            res.send(err.message);
        } else if (gyms) {
            res.render('gyminfo', { x: gyms });
        }
    });
});

module.exports = router;