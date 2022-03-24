const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Right On from DATABASE! We are ready to Rock & Roll!"))
    .catch(err => console.log("Database connection error.", err));