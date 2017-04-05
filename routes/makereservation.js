var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var gym = require('../models/gymmodel');
var client = require('../models/clientmodel');
var reservation = require('../models/reservemodel');



router.get("/reserve", function(req, res) {
    res.render("reserve.ejs");
});



router.get("/reservesuccess", function(req, res) {
    res.render("reservationsuccess.ejs");
});



router.use(bodyParser.urlencoded({ extended: false }));



router.post('/reserve', (function(req, res) {
    

 
gym.findOne({Name : req.body.gname}, function(err, gym){
   
       if(err){
           console.log(err);
           res.send(failed);
           console.log("Cannot be added");
        } else if (gym){
                client.findOne({username : req.body.username}, function(err, client){
                    if(err){
                        console.log(err);
                        res.send(failed);
                        console.log("Cannot be added");
                    } else if (client){

                     var reservation = require('../models/reservemodel');

                    reservation.create({gname: req.body.gname,
                    username: req.body.username,
                    mobilenumber: req.body.mobilenumber,}
                    , function(err, reservation){
                    if(err){
                    console.log(err);
                    res.send("Failed");
                    console.log("can't be added");
                    //res.redirect("/reserve");
                     } else{
                    console.log(reservation.gname);
                    console.log("==========");
                    console.log(reservation.username);
                    console.log(reservation.mobilenumber);
                    res.redirect("/reservesuccess");
            } 
            })
            
                    } else {
                        res.send("Please enter your correct username");
                    }
                })

        }else {
                    res.send("We don't offer that gym to reserve in");
                  }
                    });


                       
  
}));


module.exports = router;