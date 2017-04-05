var express = require("express");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var myclient = router.get("/client/:id");


var ReviewSchema = new Schema({
    Name: {
        type: String,
        unique: true
    },

    Reviews: {
        type: String
    },
    Ratings: {
        type: Number
    },
});
var Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;