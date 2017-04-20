var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = mongoose.Schema({
    photo: {
        type: String,
    }
})
// var photoSchema = mongoose.Schema({
//         media       : {data: Buffer, contentType: String},
//         project_id  : String,
//         updated_at  : {type: Date, default: Date.now }
// });


module.exports = mongoose.model("photos", photoSchema);
