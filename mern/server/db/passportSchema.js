const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const passportSchema = new Schema({
    passportNumber : String,
    surname : String,
    givenName : String,
    nationality : String,
    dob : String,
    sex : String,
    placeOfBirth : String,
    issuingCountry : String,
    dateOfIssue : String,
    dateOfExpiry : String
}, 
    { 
        collection : 'passport10k'
});

module.exports = mongoose.model('passport10k', passportSchema);