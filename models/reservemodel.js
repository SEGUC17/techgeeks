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
});

var Reservation = mongoose.model("Reservation", reserveSchema);

module.exports = Reservation;
    
});

var reservation = mongoose.model("Reservation", reserveSchema);

// module.exports.createReservation = function (gname, name, mobilenumber, paymentmethod) {
//     var newReservation = new this();
//     newReservation.gname = gname;
//     newReservation.name = name;
//     newReservation.mobilenumber = mobilenumber;
//     newReservation.paymentmethod = paymentmethod;
//     newReservation.save();
//     return newReservation;
// }
module.exports = reservation;
