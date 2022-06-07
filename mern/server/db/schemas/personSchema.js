const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const collection = 'person';

const personSchema = new Schema({
    id: String,
    isCitizen: String,
    givenName: String,
    lastName: String,
    placeOfBirth: String,
    sex: String,
    nationality: String,
    dob: String
}, 
    { 
        collection : collection
    });

module.exports = mongoose.model(collection, personSchema);