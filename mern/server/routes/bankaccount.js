const express = require("express");
const bankaccountRoutes = express.Router();
const bankAccountSchema = require("../db/schemas/bankAccountSchema");

//middleware
const getAccountById = async (req,res,next) => {
    let account;
    try {
        account = await bankAccountSchema.findOne({
            bankAccountid : req.params.id
        });

        console.log('byId'+account);
        
        if(!account){
            return res.status(404).json({ message: "Cannot find bank account"});
        }
    } catch (e) {
        return res.status(500).json({ message: e.message});
    }

    res.account = account;
    next();
}

//getById
bankaccountRoutes.get('/getById/:id', getAccountById, (req, res) => {
    res.send(res.account);
});

module.exports = {
    bankaccountRoutes
};