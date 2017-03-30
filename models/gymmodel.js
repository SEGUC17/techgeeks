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
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    }
});

var Gym = mongoose.model("Gym", GymSchema);

module.exports = Student;