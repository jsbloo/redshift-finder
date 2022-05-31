require("../connection");

// const AddressSchema = require("../schemas/AddressSchema");
// const BankCardSchema = require("../schemas/bankcardSchema");
const CitizenSchema = require("../schemas/citizenSchema");
// const MobileSchema = require("../schemas/mobileSchema");
// const PassportSchema = require("../schemas/passportSchema");
// const PeopleBankAccountSchema = require("../schemas/peopleBankAccount");
// const PeopleBusinessAddressSchema = require("../schemas/peopleBusinessAddress");

const person = {
    citizenID : "",
    forenames : "",
    surname  : "",
    homeAddress : "",
    dateOfBirth : "",
    placeOfBirth : "",
    sex: "",
    area: "",
    postcode: "",
    passport: {
        passportNumber: "",
        nationality: "",
        issuingCountry: "",
        dateOfIssue:"",
        dateOfExpiry:""
    },
    bank: {
        bankAccountId: "",
        accountNumber: "",
        bank: "",
        bankcardId: "",
        cardNumber: "",
        sortCode: ""
    },
    businessAddress: {
        businessName: "",
        businessAddress: ""
    },
    mobile: {
        businessAddress: "",
        network: "",
        phoneId: ""
    },
    vehicle: {
        registrationID: "",
        registrationDate: "",
        vehicleRegistrationNo: "",
        make: "",
        model: "",
        colour: "",
        driverLicenceID: ""
    }
}

const getCitizenById = async (id) => {
    try {
        const citizen = await CitizenSchema.find({
            citizenID : id
        });
        person.citizenID = citizen.citizenID;

        console.log(citizen);
    } catch (e) {
        console.log(e);
    }
}

getCitizenById("6452622442");