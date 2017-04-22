var express = require("express");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reserveSchema = new Schema({
    gname: {
        type: String,

    },
    username: {
        type: String,
    },
    mobilenumber: {
        type: Number,
    }
    
});

var reservation = mongoose.model("reservation", reserveSchema);


module.exports = reservation;


