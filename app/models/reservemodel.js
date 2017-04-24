var express = require("express");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//defining the reserve schema 
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

//exporting the schema

module.exports = reservation;


