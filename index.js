var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var engines = require('consolidate');
var router = express.Router();
var path = require('path');
var appRoutes = require('./app/routes/makereservation.js');
mongoose.connect("mongodb://localhost:27017/techgeeks");

var app = express();

app.set('view engine', 'html');
app.engine('html',engines.mustache);
app.set('views', __dirname + '/views');
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});
app.use ('/makereservation', appRoutes);

//REQUIRE MODELS
var Gyms = require("./app/models/gymmodel");
var uploadPhoto = require("./app/models/photos");
var client = require("./app/models/clientmodel");
var reserve = require("./app/models/reservemodel");
var reviews = require("./app/models/reviewmodel");


//APP CONFIG
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use(require("./app/routes/homepage.js"));
app.use(require("./app/routes/compare.js"));
app.use(require("./app/routes/addgyms.js"));
app.use(require("./app/routes/uploadPhoto.js"));
app.use(require("./app/routes/register.js"));
app.use(require("./app/routes/client.js"));
app.use(require("./app/routes/register.js"));
app.use(require("./app/routes/comparisonpage.js"));
app.use(require("./app/routes/gyminfo.js"));
app.use(require("./app/routes/writereview.js"));
app.use(require("./app/routes/reviewdone.js"));
app.use(require("./app/routes/search.js"));
app.use(require("./app/routes/viewaccount.js"));
app.use(require("./app/routes/makereservation.js"));
app.use(require("./app/routes/reviewsofagym.js"));
app.use(require("./app/routes/viewmyreviews.js"));
app.use(require("./app/routes/allgyms.js"));


// SERVER LISTENING
app.listen(3000, function() {
    console.log("Server is Running on Port 3000");
});
