const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
    phoneId : String,
    phoneNumber : String,
    network : String
}, 
    { 
        collection : 'mobile'
});

module.exports = mongoose.model('mobile', mobileSchema);