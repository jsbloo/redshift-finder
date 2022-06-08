const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./testServer").app;
const url = "http://localhost:3003";

chai.should();
chai.use(chaiHttp);

let testServer;

before(done => {
    testServer = app.listen(3003, done);
  });

describe("Person Requests", () => {
    const p = {
        _id: "62988730b697dec1c252a551",
        isCitizen: "true",
        id: "142210",
        lastName: "Owen",
        placeOfBirth: "LONDON",
        sex: "Male",
        nationality: "GBR",
        dob: "1954-10-08T08:57:37.294Z",
        givenName: "Timothy Glenn",
    };

    it("Should GET Person by Id", (done) => {
        chai.request(url)
            .get("/persons/getById/142210")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("object");
                response.body._id.should.eq(p._id);
                response.body.lastName.should.eq(p.lastName);
                response.body.id.should.eq(p.id);
                done();
            });
    });

    it("Should not GET Person by Id", (done) => {
        chai.request(url)
            .get("/persons/getById/153634564356232")//invalid id
            .end((err, response) => {
                response.should.have.status(404);
                response.text.should.be.eq(`{"message":"Cannot find person"}`)
                done();
            });
    });

    it("Should GET Person by full", (done) => {
        chai.request(url)
            .get("/persons/getByFull/Timothy Glenn/Owen/LONDON/1954")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("array");
                response.body[0]._id.should.eq(p._id);
                response.body[0].lastName.should.eq(p.lastName);
                response.body[0].id.should.eq(p.id);
                done();
            });
    });

    it("Should GET people by full with no params with limit of 20", (done) => {
        chai.request(url)
            .get("/persons/getByFull/none/none/none/none")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("array");
                response.body.length.should.eq(20);
                done();
            });
    });

    it("Should not GET people by full with invalid params", (done) => {
        chai.request(url)
            .get("/persons/getByFull/none/none/none/randomblahblah")
            .end((err, response) => {
                response.should.have.status(404);
                response.text.should.be.eq(`{"message":"Cannot find person"}`)
                done();
            });
    });
});

describe("Address requests", () => {

    const a = {
        "_id": "6299ea90e98dcd9720822669",
        "location": "{lon=-2.21529706825502, lat=53.0687084242377}",
        "streetName": "HIGH STREET",
        "houseNumber": "616",
        "town": "STOKE-ON-TRENT",
        "postcode": "ST6 5PD",
        "northing": "352357",
        "easting": "385672",
        "addressId": "158433"
    }

    it("Should GET Address by Id", (done) => {
        chai.request(url)
            .get("/address/getById/158433")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("object");
                response.body._id.should.eq(a._id);
                response.body.postcode.should.eq(a.postcode);
                response.body.addressId.should.eq(a.addressId);
                done();
            });
    });

    it("Should not GET Address by Id", (done) => {
        chai.request(url)
            .get("/address/getById/15843324242")//invalid id
            .end((err, response) => {
                response.should.have.status(404);
                response.text.should.be.eq(`{"message":"Cannot find address"}`)
                done();
            });
    });
});

describe("Bankaccount requests", () => {

    const b = {
        "_id": "6299eb45e98dcd97208cfe29",
        "accountNumber": "49894985",
        "bankAccountid": "3",
        "bank": "The Royal Bank of Scotland"
    }

    it("Should GET BankAccount by Id", (done) => {
        chai.request(url)
            .get("/bankaccount/getById/3")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("object");
                response.body._id.should.eq(b._id);
                response.body.accountNumber.should.eq(b.accountNumber);
                response.body.bankAccountid.should.eq(b.bankAccountid);
                done();
            });
    });

    it("Should not GET BankAccount by Id", (done) => {
        chai.request(url)
            .get("/bankaccount/getById/15843324242")//invalid id
            .end((err, response) => {
                response.should.have.status(404);
                response.text.should.be.eq(`{"message":"Cannot find bank account"}`)
                done();
            });
    });
});

describe("Passport requests", () => {

    const pp = {
        "_id": "6299e9bbe98dcd9720741157",
        "dateOfExpiry": "2018-01-12T13:36:11.368Z",
        "placeOfBirth": "LONDON",
        "sex": "Female",
        "nationality": "GBR",
        "issuingCountry": "GBR",
        "dob": "1942-09-06T03:43:02.095Z",
        "surname": "Robson",
        "passportNumber": "355635965",
        "givenName": "Michelle Karen",
        "dateOfIssue": "2008-01-12T13:36:11.368Z"
    }

    it("Should GET Passport by Id", (done) => {
        chai.request(url)
            .get("/passport/getById/355635965")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("object");
                response.body._id.should.eq(pp._id);
                response.body.nationality.should.eq(pp.nationality);
                response.body.passportNumber.should.eq(pp.passportNumber);
                done();
            });
    });

    it("Should not GET Passport by Id", (done) => {
        chai.request(url)
            .get("/passport/getById/15843324242")//invalid id
            .end((err, response) => {
                response.should.have.status(404);
                response.text.should.be.eq(`{"message":"Cannot find passport"}`)
                done();
            });
    });
});

describe("MobilePhone requests", () => {

    const mb = {
        "_id": "6299ed97e98dcd9720bc1211",
        "id": "3",
        "phoneNumber": "07700 209498",
        "operator": "Orange"}
    

    it("Should GET Person by Id", (done) => {
        chai.request(url)
            .get("/mobilePhone/getById/3")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("object");
                response.body._id.should.eq(mb._id);
                response.body.phoneNumber.should.eq(mb.phoneNumber);
                response.body.id.should.eq(mb.id);
                done();
            });
    });

    it("Should not GET Person by Id", (done) => {
        chai.request(url)
            .get("/mobilePhone/getById/15843324242")//invalid id
            .end((err, response) => {
                response.should.have.status(404);
                response.text.should.be.eq(`{"message":"Cannot find mobilephone"}`)
                done();
            });
    });
});

after(done => {
    testServer.close(done);
    process.exit(1);
  });
