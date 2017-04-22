var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");


//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")

// router.get("/compare", function(req, res) {
//     res.render("compare.ejs");
// });

// router.get("/comparisonfailed", function(req, res) {
//     res.render("comparisonfailed.ejs");
// });

router.post('/compare', (function(req, res) {
    var Name = req.body.name1
    var Name2 = req.body.name2
    Gyms.find({ $and: [{ $or: [{ Name: Name }, { Name: Name2 }] }] }, function(err, gyms) {
        if (err) {
            res.send(failed);
            res.render("comparisonfailed.ejs");
        } else if (gyms) {
            res.render('comparisonpage.ejs', { x: gyms });
        } else {
            res.send("we don't have this gym");
        }
    });

}));

module.exports = router;