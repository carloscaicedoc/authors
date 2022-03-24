const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Name is required"],
        minlength: [5, "Name must be at least 5 characters"]
    },
    publications : {
        type: Number,
        required: [true, "Number of publications is required"],
        min: [0, "Number of publications must be positive"]
    },
    book : {
        type: String,
        required: [true, "Famous book is required"],
        minlength: [4, "Famous must be at least 4 characters"]
    },
}, {timestamps : true})

module.exports.Author = mongoose.model('Author', AuthorSchema);