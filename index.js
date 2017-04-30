var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var app = express();
var router = express.Router();

//APP CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect("mongodb://techgeeks:techgeeks@ds123351.mlab.com:23351/techgeeks");

//REQUIRE MODELS
var Gyms = require("./app/models/gymmodel");
var uploadPhoto = require("./app/models/photos");
var client = require("./app/models/clientmodel");
var reserve = require("./app/models/reservemodel");
var reviews = require("./app/models/reviewmodel");

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
// app.listen(3000, function() {
//     console.log("Server is Running on Port 3000");
// });
 var port = process.env.PORT
// app.listen(port);

app.set('port', process.env.PORT);
app.listen(app.get('port'));