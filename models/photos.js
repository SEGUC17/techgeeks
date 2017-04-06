var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = mongoose.Schema({
    photo: {
        type: String,
    }
})

module.exports = mongoose.model("photos", photoSchema);