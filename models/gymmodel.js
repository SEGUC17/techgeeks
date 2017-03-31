var express = require("express");
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//var students = require("./model/studentmodel.js")
var GymSchema = new Schema({
    //de kanet name msh username
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
        unique: true
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