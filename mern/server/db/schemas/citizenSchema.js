const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const citizenSchema = new Schema({
    citizenID : String,
    forenames : String,
    surname : String,
    homeAddress : String,
    dateOfBirth : String,
    placeOfBirth : String,
    sex : String
}, 
    { 
        collection : 'citizen10k'
});

module.exports = mongoose.model('citizen10k', citizenSchema);