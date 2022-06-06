const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const collectionName = 'address'

const addressSchema = new Schema({
    location: String,
    streetName: String,
    houseNumber: String,
    town: String,
    postcode: String,
    northing: String,
    easting: String,
    addressId: String
}, 
    { 
        collection : collectionName
});

module.exports = mongoose.model(collectionName,addressSchema);