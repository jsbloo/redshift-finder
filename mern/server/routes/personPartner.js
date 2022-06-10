const express = require("express");
const personPartnerRoutes = express.Router();
const personPartner = require("../db/schemas/personPartnerSchema");

//middleware
const getPartnerIdByPersonId = async (req,res,next) => {
    let partners;
    try {
        partners = await personPartner.findOne({
            personId : req.params.id
        });     
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.partners = partners;
    next();
}

//getById
personPartnerRoutes.get('/getById/:id', getPartnerIdByPersonId, (req, res) => {
    res.send(res.partners);
});

module.exports = {
    personPartnerRoutes
};