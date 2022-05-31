const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:2gjPbKkGq6CE3ka@redshift-db.doa1vwz.mongodb.net/citizen-db?retryWrites=true&w=majority';

//we should consider, nested schemas -josh

const run = async () => {
    mongoose.connect(URI, () => {
            console.log("Connected to Database!");
        },
        e => console.error(e));
}

run();

module.exports = run;
