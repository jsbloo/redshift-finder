const express = require('express');
const { append } = require('express/lib/response');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://admin:2gjPbKkGq6CE3ka@redshift-db.doa1vwz.mongodb.net/citizen-db?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());

const citizensRouter = require("./routes/citizen");
app.use('/citizens', citizensRouter.citizenRoutes);

const personRouter = require("./routes/person");
app.use("/persons", personRouter.personRoutes);
app.listen(3001, () => console.log("Server Started"));


