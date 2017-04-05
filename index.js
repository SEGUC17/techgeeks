var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect("mongodb://localhost:27017/techgeeks");

var app = express();

app.set("view engine", "ejs");

//REQUIRE MODELS
var Gyms = require("./models/gymmodel");
var uploadPhoto = require("./models/photos");
var client = require("./models/clientmodel");
var reserve = require("./models/reservemodel");


//APP CONFIG
app.set("view engines", "ejs");
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
app.use(require("./routes/reviews.js"));
app.use(require("./routes/search.js"));
app.use(require("./routes/viewaccount.js"));
app.use(require("./routes/makereservation.js"));
app.use(require("./routes/reviewsofagym.js"));


// SERVER LISTENING
app.listen(3000, function() {
    console.log("Server is Running on Port 3000");
});

