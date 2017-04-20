var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.get('/reviewdone', function(req, res) {
    res.render("reviewdone.html");
});
router.get("/client/:id")
router.post('/reviewdone', function(req, res) {
    res.render ("reviewdone.html")
});
module.exports = router;
