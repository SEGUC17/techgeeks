var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var clientcontroller = require("../controllers/clientcontroller")
var Gyms = require("../models/gymmodel")
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/compare", function(req, res) {
    res.render("compare.html");
});

router.get("/comparisonfailed", function(req, res) {
    res.render("comparisonfailed.html");
});

router.post('/compare', clientcontroller.Compare);
module.exports = router;