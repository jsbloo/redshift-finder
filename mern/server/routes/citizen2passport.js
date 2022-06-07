const express = require("express");
const citizen2passportRoutes = express.Router();
const Citizen2PassportSchema = require("../db/schemas/citizen2passportSchema");

//middleware
const getPassportIdByCitizenId = async (req,res,next) => {
    let passportId;
    try {
        passportId = await Citizen2PassportSchema.findOne({
            citizenId : req.params.id
        });

        console.log('byId'+passportId);
        
        if(!passportId){
            return res.status(404).json({ message: "Cannot find passport Id"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.passportId = passportId;
    next();
}

//getById
citizen2passportRoutes.get('/getById/:id', getPassportIdByCitizenId, (req, res) => {
    res.send(res.passportId);
});

module.exports = {
    citizen2passportRoutes
};