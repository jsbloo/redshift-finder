const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collection = 'person2citizen'

const person2citizenSchema = new Schema({
    personId : String,
    citizenId : String
},
    {
        collection : collection
});

module.exports = mongoose.model(collection, person2citizenSchema);