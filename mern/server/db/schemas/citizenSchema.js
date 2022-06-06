const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const citizenSchema = new Schema({
    citizenId : String,
    forenames : String,
    surname : String,
    homeAddress : String,
    dateOfBirth : String,
    placeOfBirth : String,
    sex : String,
    address: String,
    driverLicenseID: String

}, 
    { 
        collection : 'citizen'
    });

module.exports = mongoose.model('citizen', citizenSchema);