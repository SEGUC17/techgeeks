var express = require("express");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GymSchema = new Schema({
    Name: {
        type: String,
        unique: true

    },
    Location: {
        type: String,
        unique: true
    },
    Email: {
        type: String,
        unique: true
    },
    Telephone: {
        type: Number,
        unique: true

    },
    Openinghours: {
        type: String,
    },
    Reviews: {
        type: String,
    },
    Ratings: {
        type: Number,
    },
});

var Gym = mongoose.model("Gym", GymSchema);
module.exports = Gym;