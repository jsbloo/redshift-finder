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

const citizensRouter = require("./routes/citizen");
app.use('/citizens', citizensRouter.citizenRoutes);

const personRouter = require("./routes/person");
app.use("/persons", personRouter.personRoutes);

const addressRouter = require("./routes/address");
app.use("/address", addressRouter.addressRoutes);

const mobilePhoneRouter = require("./routes/mobilePhone");
app.use("/mobilePhone", mobilePhoneRouter.mobilePhoneRoutes);

const passportRouter = require("./routes/passport");
app.use("/passport", passportRouter.passportRoutes);

app.listen(3002, () => console.log("Server Started"));
  

