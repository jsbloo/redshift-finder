const mongoose = require("mongoose");

const peopleMobileSchema = new mongoose.Schema({
    forenames: String,
    surname: String,
    dateOfBirth: String,
    address: String,
    phoneNumber: String,
    network: String
},
    {
        collection: 'peoplemobile'
    });

module.exports = mongoose.model(peopleMobileSchema.collection, peopleMobileSchema);