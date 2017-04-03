var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.get('/reviewdone', function(req, res) {
    res.render("reviewdone.ejs");
});