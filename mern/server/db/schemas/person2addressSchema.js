const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collection = 'person2address'

const person2addressSchema = new Schema({
    personId : String,
    addressId : String
},
    {
        collection : collection
});

module.exports = mongoose.model(collection, person2addressSchema);