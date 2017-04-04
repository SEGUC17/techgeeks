var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.get('/writereview', function(req, res) {
    res.render("writereviews.ejs");
});
var ClientReview =require('../models/gymmodel')

router.post ('/reviewdone',function(req, res){
    ClientReview.findOne ({Name:req.body.writegym},
    function(err, c){
      if(err){
        console.log(err)
        return res.status('There is a problem here').send();
      }
      if(c){
          let check = new ClientReview (req.body);
          ClientReview.create({ Reviews: req.body.writereview},
           function(err,check){
               if(err){
                   console.log(err)
                   return res.status('There is a problem here').send();
               }
               if(check){
                   res.redirect('/');
                   console.log(check);
               }

        
        res.redirect('/reviews.ejs');
        console.log(c);
          })
      }else {
        console.log('err');
        res.send('Your gym is not found here');
        return res.status('Your gym is not found here').send()
      }
    }) 
}
}
router.get("/client/:id")


module.exports = router;
// var express = require("express");
// var router = express.Router();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// router.get('/writereview', function(req, res) {
//     res.render("writereviews.ejs");
// });

// router.post ('/reviewdone',writereview.Writes);

// var ClientReview =require('../models/gymmodel')

// var Review = {

// Writes:function(req,res){
//     let c = new ClientReview (req.body);
//     ClientReview.findOne ({Name:req.body.writegym},
//     function(err, c){
//       if(err){
//         console.log(err)
//         return res.status('There is a problem here').send();
//       }
//       if(c){
//           let check = new ClientReview (req.body);
//           ClientReview.save({ Reviews: req.body.writereview},
//            function(err,check){
//                if(err){
//                    console.log(err)
//                    return res.status('There is a problem here').send();
//                }
//                if(check){
//                    res.redirect('/');
//                    console.log(check);
//                }


//         res.redirect('/reviews.ejs');
//         console.log(c);
//           })
//       }else {
//         console.log('err');
//         res.send('Your gym is not found here');
//         return res.status('Your gym is not found here').send()
//       }
//     }) 
// }
// }
// router.get("/client/:id")


// module.exports = router;
