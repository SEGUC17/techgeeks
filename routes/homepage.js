var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.get('/', function(req, res) {
    res.render("homepage.ejs");
});

router.get("/client/:id")

module.exports = router;