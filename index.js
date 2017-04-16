var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var router = express.Router();
var engines = require('consolidate');
mongoose.connect("mongodb://localhost:27017/techgeeks");

var app = express();
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set("view engine", "html");

//REQUIRE MODELS
var Gyms = require("./models/gymmodel");
var uploadPhoto = require("./models/photos");
var client = require("./models/clientmodel");
var reserve = require("./models/reservemodel");
var reviews = require("./models/reviewmodel");

//APP CONFIG
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use(require("./routes/homepage.js"));
app.use(require("./routes/compare.js"));
app.use(require("./routes/addgyms.js"));
app.use(require("./routes/uploadPhoto.js"));
app.use(require("./routes/register.js"));
app.use(require("./routes/client.js"));
app.use(require("./routes/register.js"));
app.use(require("./routes/comparisonpage.js"));
app.use(require("./routes/gyminfo.js"));
app.use(require("./routes/writereview.js"));
app.use(require("./routes/reviewdone.js"));
app.use(require("./routes/search.js"));
app.use(require("./routes/viewaccount.js"));
app.use(require("./routes/makereservation.js"));
app.use(require("./routes/reviewsofagym.js"));
app.use(require("./routes/viewmyreviews.js"));
app.use(require("./routes/allgyms.js"))

// SERVER LISTENING
app.listen(3000, function() {
    console.log("Server is Running on Port 3000");
});