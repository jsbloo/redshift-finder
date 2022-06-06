const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const collection = 'mobilephone'

const mobilePhoneSchema = new Schema({
    id : String,
    phoneNumber : String,
    operator : String
}, 
    { 
        collection : collection
});

module.exports = mongoose.model(collection, mobilePhoneSchema);