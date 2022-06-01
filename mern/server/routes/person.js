const express = require("express");
const personRoutes = express.Router();
const CitizenSchema = require("../db/schemas/citizenSchema");
const AddressSchema = require("../db/schemas/addressSchema");


const getPersonsWithAddrAndPassport = async (req, res, next) => {
    let person = { //we need an array of persons
        citizenID: "",
        forenames: "",
        surname: "",
        homeAddress: "",
        dateOfBirth: "",
        placeOfBirth: "",
        gender: "",
        area: "",
        postcode: ""
    };
    try {

        const citizens = await CitizenSchema.find({
            forenames: req.params.fname,
            surname: req.params.sname,
            dateOfBirth: req.params.dob
        });

        for (const cit of citizens) {
            person.citizenID = cit.citizenID;
            person.forenames = cit.forenames;
            person.surname = cit.surname;
            person.homeAddress = cit.homeAddress;
            person.dateOfBirth = cit.dateOfBirth;
            person.placeOfBirth = cit.placeOfBirth;
            person.gender = cit.sex;

            const citAddr = await AddressSchema.find({
                homeAddress: cit.homeAddress
            });

            if (citAddr.length > 1) {
                throw new Error("Multiple persons of same name and DOB at same address");
            }

            person.area = citAddr[0].area;
            person.postcode = citAddr[0].postcode;
        }

    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }

    console.log(person);
    res.person = person;
    next();
}

//getByFnSnDob
personRoutes.get('/:fname/:sname/:dob', getPersonsWithAddrAndPassport, (req, res) => {
    res.send(res.person);
});

module.exports = {
    personRoutes
};