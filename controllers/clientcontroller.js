var Gyms = require("../models/gymmodel")
var clientcontroller = {
    Compare: function(req, res) {
        var gymname1 = req.body.name1
        var gymname2 = req.body.name2
        Gyms.find({ $and: [{ $or: [{ Name: gymname1 }, { Name: gymname2 }] }] }, function(err, gyms) {
            if (err) {
                res.send(failed);
                res.render("comparisonfailed.ejs");
            } else if (gyms) {
                res.render('comparisonpage.html', { x: gyms });
            } else {
                res.send("we don't have this gym");
            }
        });
    }

};

module.exports = clientcontroller;