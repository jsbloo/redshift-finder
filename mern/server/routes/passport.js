const express = require("express");
const passportRoutes = express.Router();
const PassportSchema = require("../db/schemas/passportSchema");

//middleware
const getPassportById = async (req,res,next) => {
    let passport;
    try {
        passport = await PassportSchema.findOne({
            passportNumber : req.params.id
        });
        
        if(!passport){
            return res.status(404).json({ message: "Cannot find passport"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    passport.dateOfIssue = passport.dateOfIssue.substring(0,10);
    passport.dateOfExpiry = passport.dateOfIssue.substring(0,10);

    res.passport = passport;
    next();
}

//getById
passportRoutes.get('/getById/:id', getPassportById, (req, res) => {
    res.send(res.passport);
});

module.exports = {
    passportRoutes: passportRoutes
};