const mongoose = require("mongoose");

const peopleBankAccount = new mongoose.Schema({
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

module.exports = mongoose.model(peopleBankAccount.collection, peopleBankAccount);