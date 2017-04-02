var express = require("express");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = mongoose.Schema({
    photo: {
        type: String,
        required: true,

    }
})
var Photos = mongoose.model("Photos", photoSchema);
module.exports = mongoose.model("photos", photoSchema);

