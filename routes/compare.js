var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/compare", function(req, res) {
    res.render("compare.html");
});

router.get("/comparisonfailed", function(req, res) {
    res.render("comparisonfailed.html");
});

router.post('/compare', (function(req, res) {

    var Name = req.body.name1
    var Name2 = req.body.name2
    Gyms.find({ $and: [{ $or: [{ Name: Name }, { Name: Name2 }] }] }, function(err, gyms) {
        if (err) {
            res.send(failed);
            res.render("comparisonfailed.html");
        } else if (gyms) {
            res.render('comparisonpage.html', { x: gyms });
        } else {
            res.send("we don't have this gym");
        }
    });

}));

<<<<<<< HEAD
module.exports = router;
=======



module.exports = router;
>>>>>>> 163cd446af9f8539df339f3dddda7c7da4a14a2c
