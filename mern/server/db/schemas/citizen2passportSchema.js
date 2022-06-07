const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collection = 'citizen2passport'

const citizen2passportSchema = new Schema({
    passportId : String,
    citizenId : String
},
    {
        collection : collection
});

module.exports = mongoose.model(collection, citizen2passportSchema);