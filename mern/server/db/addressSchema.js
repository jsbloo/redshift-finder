const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    homeAddress : String,
    area : String,
    postcode: String
}, 
    { 
        collection : 'address10k'
});

module.exports = mongoose.model('address10k', addressSchema);