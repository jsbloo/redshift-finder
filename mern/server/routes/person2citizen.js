const express = require("express");
const person2citizenRoutes = express.Router();
const Person2CitizenSchema = require("../db/schemas/person2citizenSchema");

//middleware
const getCitizenIdByPersonId = async (req,res,next) => {
    let citizenId;
    try {
        citizenId = await Person2CitizenSchema.findOne({
            personId : req.params.id
        });

        console.log('byId'+citizenId);
        
        if(!citizenId){
            return res.status(404).json({ message: "Cannot find citizen Id"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.citizenId = citizenId;
    next();
}

//getById
person2citizenRoutes.get('/getById/:id', getCitizenIdByPersonId, (req, res) => {
    res.send(res.citizenId);
});

module.exports = {
    person2citizenRoutes
};