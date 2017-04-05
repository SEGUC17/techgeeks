var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var Gyms = require("../models/gymmodel")
errouter.use(bodyParser.urlencoded({ extended: true }));

router.get("/search", function(req, res) {
    res.render("search.ejs");
});
router.post('/search',function(req,res){
Gyms.find({ $and: [{ $or: [{ Name: req.body.searchname }, { Location: req.body.searchaddress }] }] }, function(err, gyms) {
        if (err) {
            res.send(err.message);
        } else if (gyms) {
            console.log("rendering");
            res.redirect('/gyminfo');
        }
    });

});

module.exports = router;