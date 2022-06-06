const express = require("express");
const personRoutes = express.Router();
const PersonSchema = require("../db/schemas/personSchema");

//middleware
const getPersonById = async (req, res, next) => {
    let person;
    try {
        person = await PersonSchema.find({
            id: req.params.id
        });

        console.log('byId' + person);

        if (!person) {
            return res.status(404).json({ message: "Cannot find person" });
        }
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }

    res.person = person;
    next();
}

//TODO: optimize
const getPersonByNameAndPob = async (req, res, next) => {
    let person;
    console.log(req.params);
    try {
        person = await PersonSchema.find({
            givenName: (req.params.givenName),
            lastName: req.params.lastName,
            placeOfBirth: req.params.placeOfBirth,
            dob: { $regex: req.params.birthYear }
        });

        console.log(person);

        if (!person[0]) {
            return res.status(404).json({ message: "Cannot find person" });
        }
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }

    res.person = person;
    next();
}

//getById
personRoutes.get('/getById/:id', getPersonById, (req, res) => {
    res.send(res.person);
});

personRoutes.get('/getByFull/:givenName/:lastName/:placeOfBirth/:birthYear?', getPersonByNameAndPob, (req, res) => {
    res.send(res.person);
});


module.exports = {
    personRoutes
};