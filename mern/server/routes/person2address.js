const express = require("express");
const person2addressRoutes = express.Router();
const Person2AddressSchema = require("../db/schemas/person2addressSchema");

//middleware
const getAddressIdByPersonId = async (req,res,next) => {
    let addressId;
    try {
        addressId = await Person2AddressSchema.findOne({
            personId : req.params.id
        });
        
        if(!addressId){
            return res.status(404).json({ message: "Cannot find address Id"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.addressId = addressId;
    next();
}

//getById
person2addressRoutes.get('/getById/:id', getAddressIdByPersonId, (req, res) => {
    res.send(res.addressId);
});

module.exports = {
    person2addressRoutes
};