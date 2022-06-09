const express = require("express");
const personPartnerRoutes = express.Router();
const personPartner = require("../db/schemas/personPartnerSchema");

//middleware
const getPartnerIdByPersonId = async (req,res,next) => {
    let partners;
    try {
        partners = await personPartner.find({
            personId : req.params.id
        });     
           
        if(!partners[0]){
            return res.status(404).json({ message: "Cannot find partners Id"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.partners = partners;
    next();
}

//getById
person2citizenRoutes.get('/getById/:id', getPartnerIdByPersonId, (req, res) => {
    res.send(res.partners);
});

module.exports = {
    personPartnerRoutes
};