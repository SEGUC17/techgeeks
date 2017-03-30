var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect("mongodb://localhost:27017/miniproject");
//mongoose.connect("mongodb://localhost:27017/portofolio");

var app = express();

app.set("view engine", "ejs");

//REQUIRE MODELS

//APP CONFIG
app.set("view engines", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use(require("./routes/homepage.js"));

// SERVER LISTENING
app.listen(3000, function() {
    console.log("Server is Running on Port 3000");
});