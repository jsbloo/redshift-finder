const express = require("express");
const person2bankaccountRoutes = express.Router();
const Person2BankAccountSchema = require("../db/schemas/person2bankaccountSchema");

//middleware
const getAccountIdByPersonId = async (req,res,next) => {
    let accountId;
    try {
        accountId = await Person2BankAccountSchema.findOne({
            personId : req.params.id
        });
        
        if(!accountId){
            return res.status(404).json({ message: "Cannot find account Id"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.accountId = accountId;
    next();
}

//getById
person2bankaccountRoutes.get('/getById/:id', getAccountIdByPersonId, (req, res) => {
    res.send(res.accountId);
});

module.exports = {
    person2bankaccountRoutes
};