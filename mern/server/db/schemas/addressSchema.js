const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const collectionName = 'address10k'

const addressSchema = new Schema({
    homeAddress : String,
    area : String,
    postcode: String
}, 
    { 
        collection : collectionName
});

module.exports = mongoose.model(collectionName,addressSchema);