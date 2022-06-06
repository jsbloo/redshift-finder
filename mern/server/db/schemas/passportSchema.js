const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const collection = 'passport'

const passportSchema = new Schema({
    dateOfExpiry: String,
    placeOfBirth: String,
    sex: String,
    nationality: String,
    issuingCountry: String,
    dob: String,
    surname: String,
    passportNumber: String,
    givenName: String,
    dateOfIssue: String
}, 
    { 
        collection : collection
});

module.exports = mongoose.model(collection, passportSchema);