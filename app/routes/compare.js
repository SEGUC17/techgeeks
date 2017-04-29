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

module.exports = rout
