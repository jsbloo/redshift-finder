const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const collectionName = 'friends'

const friendsSchema = new Schema({
    personId: String,
    friendId: String
}, 
    { 
        collection : collectionName
});

module.exports = mongoose.model(collectionName,friendsSchema);