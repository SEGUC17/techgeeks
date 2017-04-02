var express = require("express");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reserveSchema = new Schema({
    gname: {
        type: String,
        unique: true

    },
    name: {
        type: String,
        unique: true
    },
    mobilenumber: {
        type: Number,
        unique: true
    },
    paymentmethod: {
        type: Number,
        unique: true
    }
});

var Reservation = mongoose.model("Reservation", reserveSchema);

module.exports = Reservation;