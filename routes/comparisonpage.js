var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
//var document = require("document")
//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: true }));


router.get("/comparisonpage", function(req, res) {
    res.render("comparisonpage.ejs");
});

// router.get('/compare', function(req, res) {
//     var Name = req.body.name1
//     Gyms.find({ Name: Name }, function(err, gyms) {
//         if (err) {
//             res.send(err.message);
//         } else {
//             console.log(Name);
//             console.log("rendering");
//             res.render('comparisonpage', { x: gyms });
//         }
//     });
// });

module.exports = router;