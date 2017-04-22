var express = require("express");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    Username: {
        type: String
    },

    Name: {
        type: String,
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