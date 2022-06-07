const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const collection = 'bankaccount'

const bankAccountSchema = new Schema({
    accountNumber : String,
    bankAccountid : String,
    bank : String
}, 
    { 
        collection : collection
});

module.exports = mongoose.model(collection, bankAccountSchema);