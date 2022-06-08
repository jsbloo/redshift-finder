const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const collection = 'person2bankaccount'

const person2bankaccountSchema = new Schema({
    personId : String,
    bankaccountId : String,
}, 
    { 
        collection : collection
});

module.exports = mongoose.model(collection, person2bankaccountSchema);