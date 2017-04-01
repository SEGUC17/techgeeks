var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect("mongodb://localhost:27017/techgeeks");

<<<<<<< HEAD
=======

>>>>>>> d39b50cfa5dd60f7b09bd2e5d24e7b60cb145c57
var app = express();

app.set("view engine", "ejs");

//REQUIRE MODELS
var Gyms = require("./models/gymmodel");
<<<<<<< HEAD
var uploadPhoto = require("./models/photos")
=======
>>>>>>> d39b50cfa5dd60f7b09bd2e5d24e7b60cb145c57

//APP CONFIG
app.set("view engines", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use(require("./routes/homepage.js"));
app.use(require("./routes/compare.js"));
app.use(require("./routes/addgyms.js"));
<<<<<<< HEAD
app.use(require("./routes/uploadPhoto.js"));
app.use(require("./routes/makereservation.js"));
=======
>>>>>>> d39b50cfa5dd60f7b09bd2e5d24e7b60cb145c57


// SERVER LISTENING
app.listen(3000, function() {
    console.log("Server is Running on Port 3000");
});