const mongoose = require("mongoose");


const collectionName = "vehicleRegistration10k";

const vehicleRegistrationSchema = new mongoose.Schema({
    bankAccountId: String,
    accountNumber: String,
    bank: String,
    forenames: String,
    surname: String,
    dateOfBirth: String,
    homeAddress: String
},
    {
        collection: collectionName
    });

module.exports = mongoose.model(collectionName, vehicleRegistrationSchema);