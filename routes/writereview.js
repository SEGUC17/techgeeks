var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Gyms =require('../models/gymmodel');
var rev =require('../models/reviewmodel');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/writereview', function(req, res) {
    res.render("writereviews.ejs");
});

router.post ('/writereview',(function(req, res){

    Gyms.find({Name:req.body.writegym},
    function(err, gyms){
      if(err){
        console.log(err.message);
        return res.status('There is a problem here').send();
      }
      else if (gyms){
          var rev =require('../models/reviewmodel');

          reviews.create({Name : req.body.writegym, Reviews: req.body.writereview},
           function(err,rev){
               if(err){
                   console.log(err)
                   return res.status('There is a problem here').send();
               }
              else {
                  Console.log("yes");
                   res.redirect('/reviewdone');
                   console.log(rev);
              }
            } )
      }
      //else {
        //console.log('err');
        //res.send('Your gym is not found here');
        //return res.status('Your gym is not found here').send()
     // }
    }) 
}));

router.get("/client/:id")


module.exports = router;