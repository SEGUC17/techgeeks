var express = require("express");
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var clientSchema = new Schema ({
    username : {
        type: String,
        unique : true
    },
    Email: {
         type: String,
        unique: true
    },
    password: {
         type: String,
    },
    gender: {
        type: String,
    },
     age: {
        type: Number,
    },

     Governance: {
        type: String,
    },

     reviews: {
        type: String,
    },
    rating: {
        type: String,
    },
      activities: {
        type: String,
    },
})
var client = mongoose.model("client", clientSchema);
module.exports = client;
