const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:2gjPbKkGq6CE3ka@cluster0.o7fedgk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI, () => {
        console.log("Connected to Database!");
    },
    e => console.error(e)
);