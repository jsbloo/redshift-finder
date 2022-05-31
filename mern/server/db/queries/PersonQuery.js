// require("../connection");

// const AddressSchema = require("../schemas/AddressSchema");
// const BankCardSchema = require("../schemas/bankcardSchema");
// const CitizenSchema = require("../schemas/citizenSchema");
// const MobileSchema = require("../schemas/mobileSchema");
// const PassportSchema = require("../schemas/passportSchema");
// const PeopleBankAccountSchema = require("../schemas/peopleBankAccount");
// const PeopleBusinessAddressSchema = require("../schemas/peopleBusinessAddress");

// const person = {
//     citizenID : "",
//     forenames : "",
//     surname  : "",
//     homeAddress : "",
//     dateOfBirth : "",
//     placeOfBirth : "",
//     sex: "",
//     area: "",
//     postcode: "",
//     passport: {
//         passportNumber: "",
//         nationality: "",
//         issuingCountry: "",
//         dateOfIssue:"",
//         dateOfExpiry:""
//     },
//     bank: {
//         bankAccountId: "",
//         accountNumber: "",
//         bank: "",
//         bankcardId: "",
//         cardNumber: "",
//         sortCode: ""
//     },
//     businessAddress: {
//         businessName: "",
//         businessAddress: ""
//     },
//     mobile: {
//         businessAddress: "",
//         network: "",
//         phoneId: ""
//     },
//     vehicle: {
//         registrationID: "",
//         registrationDate: "",
//         vehicleRegistrationNo: "",
//         make: "",
//         model: "",
//         colour: "",
//         driverLicenceID: ""
//     }
// }

// const getCitizenById = async (id) => {
//     try {
//         console.log("hi");
//         const citizen = await CitizenSchema.find({
//             citizenID : id
//         });

//         const cit1 = citizen[0];

        // person.citizenID = cit1.citizenID;
        // person.forenames = cit1.forenames
        // person.surname = cit1.surname;
        // person.homeAddress - cit1.homeAddress;
        // person.dateOfBirth = cit1.dateOfBirth;
        // person.placeOfBirth = cit1.placeOfBirth;
        // person.sex = cit1.sex;

//         console.log(cit1);

//         return cit1;

//     } catch (e) {
//         console.log(e);
//     }
// }

// const getAddressByFnSn = async () => {
//     try{

//     } catch (e){
//         console.log(e);
//     }
// }

//getCitizenById("6452622442");

// module.exports = { getCitizenById };
