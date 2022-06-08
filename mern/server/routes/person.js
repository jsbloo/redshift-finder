const express = require("express");
const personRoutes = express.Router();
const PersonSchema = require("../db/schemas/personSchema");

//middleware
const getPersonById = async (req, res, next) => {
    let person;
    try {
        person = await PersonSchema.findOne({
            id: req.params.id
        });

        if (!person) {
            return res.status(404).json({
                message: "Cannot find person"
            });
        }
    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }

    res.person = person;
    next();
}

const getPersonByNameAndPob = async (req, res, next) => {
    let person;
    const gn = req.params.givenName;
    const ln = req.params.lastName;
    const pob = req.params.placeOfBirth;
    const dob = req.params.birthYear;
    try {
        // if all field equal none, default $and
        const filter = [{}];

        gn !== 'none' && filter.push({
            givenName: gn
        });
        ln !== 'none' && filter.push({
            lastName: ln
        });
        pob !== 'none' && filter.push({
            placeOfBirth: pob
        });
        dob !== 'none' && filter.push({
            dob: {$regex: dob}
        });

        person = await PersonSchema.find({
            $and: filter
        }).limit(20);

        if (!person[0]) {
            return res.status(404).json({
                message: "Cannot find person"
            });
        }
    } catch (e) {
        return res.status(500).json({
            message: e.message
        })
    }

    res.person = person;
    next();
}

//getById
personRoutes.get('/getById/:id', getPersonById, (req, res) => {
    res.send(res.person);
});

personRoutes.get('/getByFull/:givenName/:lastName/:placeOfBirth/:birthYear', getPersonByNameAndPob, (req, res) => {
    res.send(res.person);
});


module.exports = {
    personRoutes
};