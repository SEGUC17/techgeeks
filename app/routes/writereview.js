var express = require("express");
var router = express.Router();
//REQUIRE Gym MODEL
var Gyms = require("../models/gymmodel");
// COMPARING BETWEEN TWO GYMS ACCORDING TO THEIR NAMES
router.post('/compare', function(req, res) {
    var gym1 = req.body.gym1;
    var gym2 = req.body.gym2;

    Gyms.find({
        $and: [{
            $or: [{ Name: gym1 }, { Name: gym2 }]
        }]
    }, function(err, gyms) {
        if (err) {
            return res.status(500).json({
                error: 'Internal server error',
                data: null
            });
        }
            
        if (gyms.length === 0  ||  gyms.length === 1)  {   
            return res.status(404).json({
                error: 'Gyms not found',
                data: null
            });
        } else {
            return res.json({
                error: null,
                data: gyms
            });
         }
    });

});

module.exports = router;

var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
//REQUIRE Gym MODEL
var Gyms = require('../models/gymmodel');
//REQUIRE Reviews MODEL
var Review = require('../models/reviewmodel');
//REQUIRE Clients MODEL
var Clients = require('../models/clientmodel');
//WRITING REVIEWS ON THE GYMS

router.post('/writereview', (function(req, res) {

    Gyms.findOne({ Name: req.body.gymName }, function(err, gym) {
        if (err) {
            res.status(500).json({
                error: 'Internal server error',
                data: null
            });

        } else if (!gym) {
          res.status(404).json({
                error: 'Please enter a valid gym',
                data: null
            });


        }
        else {
              Clients.findOne({ username: req.body.username }, function(err, client) {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        error: 'Interal server error',
                        data: null
                    });
                } else if (!client) {
                      res.status(404).json({
                error: 'This is not a valid username',
                data: null
            });
                   
                }
                else {
                     var Review = require('../models/reviewmodel');

                    Review.create({ Username: req.body.username, Name: req.body.gymName, Reviews: req.body.review, Ratings: req.body.rating },
                        function(err, Review) {
                            if (err) {
                                console.log(err);
                                res.status(500).json({
                                    error: 'Interal server error',
                                    data: null
                                });
                            } else {
                                return res.json({
                                    error: null,
                                    data: Review
                                });
                            }
                        })
                }
                
                
            })
        }
       
        
    });
}));

module.exports = router;