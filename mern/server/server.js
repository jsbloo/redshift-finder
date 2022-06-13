const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const URI = 'mongodb://ihavenoclue:noreallynotone@docdb-2022-05-31-18-46-43.cluster-cnyrbefiq91q.eu-west-2.docdb.amazonaws.com:27017/redshift?ssl=true&tlsCAFile=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false'

mongoose.connect(URI, {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));
app.use(express.json());
app.use(cors());

const bankAccountRouter = require("./routes/bankaccount");
app.use("/bankaccount", bankAccountRouter.bankaccountRoutes);

const citizensRouter = require("./routes/citizen");
app.use('/citizens', citizensRouter.citizenRoutes);

const citizen2passportRouter = require("./routes/citizen2passport");
app.use('/citizen2passport', citizen2passportRouter.citizen2passportRoutes);

const personRouter = require("./routes/person");
app.use("/persons", personRouter.personRoutes);

const person2AddressRouter = require("./routes/person2address");
app.use("/person2address", person2AddressRouter.person2addressRoutes);

const person2BankAccountRouter = require("./routes/person2bankaccount");
app.use("/person2bankaccount", person2BankAccountRouter.person2bankaccountRoutes);

const person2CitizenRouter = require("./routes/person2citizen");
app.use("/person2citizen", person2CitizenRouter.person2citizenRoutes);

const addressRouter = require("./routes/address");
app.use("/address", addressRouter.addressRoutes);

const mobilePhoneRouter = require("./routes/mobilePhone");
app.use("/mobilePhone", mobilePhoneRouter.mobilePhoneRoutes);

const passportRouter = require("./routes/passport");
app.use("/passport", passportRouter.passportRoutes);

const personPartnerRouter = require("./routes/personPartner");
app.use("/partner", personPartnerRouter.personPartnerRoutes);

const friendRouter = require("./routes/friends");
app.use("/friends", friendRouter.friendRoutes);

app.listen(3002, () => console.log("Server Started"));

module.exports = {
    app
};