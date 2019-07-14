const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { Type: String, required: true },
    authors: [{ Type: String, required: true }],
    description: String,
    image: {type: String, trim: true},
    link: {type: String, trim: true},
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.export = Book;