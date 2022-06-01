const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:2gjPbKkGq6CE3ka@redshift-db.doa1vwz.mongodb.net/citizen-db?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const citizensRouter = require("./routes/citizen");
app.use('/citizens', citizensRouter);

app.listen(3000, () => console.log("Server Started"));


