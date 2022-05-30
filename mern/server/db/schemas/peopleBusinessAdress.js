const mongoose = require("mongoose");

const peopleBusinessAddress = new mongoose.Schema({
    bankAccountId: String,
    accountNumber: String,
    bank: String,
    forenames: String,
    surname: String,
    dateOfBirth: String,
    homeAddress: String
},
    {
        collection: 'peoplebankaccount10k'
    });

module.exports = mongoose.model(peopleBusinessAddress.collection, peopleBusinessAddress);