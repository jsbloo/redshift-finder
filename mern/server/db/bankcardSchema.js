const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const bankcardSchema = new Schema({
    bankcardId : String,
    cardNumber : String,
    sortCode : String,
    bankAccountId : String,
    accountNumber : String,
    bank : String
}, 
    { 
        collection : 'bankcard10k'
});

module.exports = mongoose.model('bankcard10k', bankcardSchema);