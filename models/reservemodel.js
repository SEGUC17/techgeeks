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




//  gym.find({Name : gName}, function(err, reservation){
   
//        if(err){
//            console.log(err);
//            res.send(failed);
//            console.log("Cannot be added");
//                 } else if (!gym){
//                         res.send("We don't offer that gym to reserve in");
//                     }else {
//                     client.find({username : Username}, function(err, reservation){
//                         if (err) {
//                         console.log(err);
//                         res.send("Failed");
//                         console.log("can't be added");
//                         //res.redirect("/reserve");
                            
//                          } else if(!client){
//                              res.send("You're not a registered client");
//                          }
//                          else{
//                                  var reservation = require('../models/reservemodel');

//                              reservation.create({gname: req.body.gname,
//                                                  username: req.body.username,
//                                                  mobilenumber: req.body.mobilenumber,}
//                                 , function(err, reservation){
//                                             if(err){
//                                             console.log(err);
//                                             res.send("Failed");
//                                             console.log("can't be added");
//                                             //res.redirect("/reserve");
//                                                 } else{
//                                                     console.log(reservation.name);
//                                                     console.log("==========");
//                                                     console.log(reservation.mobilenumber);
//                                                     res.redirect("/reservesuccess");
//                                                         } 
//                                     }

//                                     );
//                                     }
//                     });

//                         }
//    });