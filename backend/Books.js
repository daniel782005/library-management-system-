const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    availableCopies: { type: Number, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
