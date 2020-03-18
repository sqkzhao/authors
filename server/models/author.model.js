const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required."],
        minlength: [3, "Author name must be at least 3 characters long."]
    }
}, { timestamps: true })

module.exports.Author = mongoose.model("Author", AuthorSchema)