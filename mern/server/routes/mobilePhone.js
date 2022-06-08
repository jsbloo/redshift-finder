const express = require("express");
const mobilePhoneRoutes = express.Router();
const MobilePhoneSchema = require("../db/schemas/mobilePhoneSchema");

//middleware
const getMobilePhoneById = async (req,res,next) => {
    let mobilePhone;
    try {
        mobilePhone = await MobilePhoneSchema.findOne({
            id : req.params.id
        });
        
        if(!mobilePhone){
            return res.status(404).json({ message: "Cannot find mobilephone"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.mobilePhone = mobilePhone;
    next();
}

//getById
mobilePhoneRoutes.get('/getById/:id', getMobilePhoneById, (req, res) => {
    res.send(res.mobilePhone);
});

module.exports = {
    mobilePhoneRoutes
};