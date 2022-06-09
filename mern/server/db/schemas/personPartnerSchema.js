const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const collectionName = 'personpartner'

const personPartnerSchema = new Schema({
    personId: String,
    partnerId: String
}, 
    { 
        collection : collectionName
});

module.exports = mongoose.model(collectionName,personPartnerSchema);