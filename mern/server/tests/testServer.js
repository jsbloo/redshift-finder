const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const URI = 'mongodb+srv://admin:2gjPbKkGq6CE3ka@redshift-db.doa1vwz.mongodb.net/world?retryWrites=true&w=majority'

mongoose.connect(URI, {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));
app.use(express.json());
app.use(cors());

const bankAccountRouter = require("../routes/bankaccount");
app.use("/bankaccount", bankAccountRouter.bankaccountRoutes);

const citizensRouter = require("../routes/citizen");
app.use('/citizens', citizensRouter.citizenRoutes);

const citizen2passportRouter = require("../routes/citizen2passport");
app.use('/citizen2passport', citizen2passportRouter.citizen2passportRoutes);

const personRouter = require("../routes/person");
app.use("/persons", personRouter.personRoutes);

const person2AddressRouter = require("../routes/person2address");
app.use("/person2address", person2AddressRouter.person2addressRoutes);

const person2BankAccountRouter = require("../routes/person2bankaccount");
app.use("/person2bankaccount", person2BankAccountRouter.person2bankaccountRoutes);

const person2CitizenRouter = require("../routes/person2citizen");
app.use("/person2citizen", person2CitizenRouter.person2citizenRoutes);

const addressRouter = require("../routes/address");
app.use("/address", addressRouter.addressRoutes);

const mobilePhoneRouter = require("../routes/mobilePhone");
app.use("/mobilePhone", mobilePhoneRouter.mobilePhoneRoutes);

const passportRouter = require("../routes/passport");
app.use("/passport", passportRouter.passportRoutes);

module.exports = {
    app
};