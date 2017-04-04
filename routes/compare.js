var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");


//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/compare", function(req, res) {
    res.render("compare.ejs");
});

router.get("/comparisonfailed", function(req, res) {
    res.render("comparisonfailed.ejs");
});

router.post('/compare', (function(req, res) {
    
 var Name = req.body.name1
 var Name2 = req.body.Name2
    Gyms.find({ Name: Name }, function(err, gyms) {
        if (err) {
            res.send(err.message);
        } else {
            console.log(Name);
            console.log("rendering");
            res.render('comparisonpage.ejs', { x: gyms });
        }
    });

}));




module.exports = router;

// Gyms.findOne({ Name: req.body.name1, Name: req.body.name2 }, function(err, gyms) {
//         if (err) {
//             res.send(err.message);
//             res.render("comparisonfailed.ejs");
//         }
//         if (gyms) {
//             res.redirect("/comparisonpage");
//         } else {
             
//             console.log("error");
//             res.render("comparisonfailed.ejs");
//         }
//     });