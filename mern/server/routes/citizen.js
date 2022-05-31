const express = require("express");
const citizenRoutes = express.Router();
const CitizenSchema = require("../db/schemas/citizenSchema");

//middleware
const getCitizenById = async (req,res,next) => {
    let citizen;
    try {
        citizen = await CitizenSchema.find({
            citizenID : req.params.id
        });

        console.log(citizen);
        
        if(citizen == []){
            return res.status(404).json({ message: "Cannot find citizen"});
        }
    } catch (e) {
        return res.status(500).json({ message: "error"});
    }

    res.citizen = citizen;
    next();
}

//getById
citizenRoutes.get('/:id', getCitizenById, (req, res) => {
    res.send(res.citizen);
});

module.exports = citizenRoutes;