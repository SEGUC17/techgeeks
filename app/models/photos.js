var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = mongoose.Schema({
    name: String,
    created: Date,
    file: Object
});


module.exports = mongoose.model("photos", photoSchema);