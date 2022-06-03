const express = require("express");
const addressRoutes = express.Router();
const AddressSchema = require("../db/schemas/addressSchema");

//middleware
const getAddressById = async (req,res,next) => {
    let address;
    try {
        address = await AddressSchema.find({
            addressId : req.params.id
        });

        console.log('byId'+address);
        
        if(!address[0]){
            return res.status(404).json({ message: "Cannot find address"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.address = address;
    next();
}

//getById
addressRoutes.get('/getById/:id', getAddressById, (req, res) => {
    res.send(res.address);
});

module.exports = {
    addressRoutes
};