const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Book = require('./models/Book');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection [cite: 50, 63]
mongoose.connect('YOUR_MONGODB_ATLAS_URI', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// CRUD Routes [cite: 21, 62]
app.get('/api/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.post('/api/books', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json({ message: "Book Added Successfully" });
});

app.put('/api/books/:id', async (req, res) => {
    await Book.findOneAndUpdate({ id: req.params.id }, req.body);
    res.json({ message: "Book Updated Successfully" });
});

app.delete('/api/books/:id', async (req, res) => {
    await Book.findOneAndDelete({ id: req.params.id });
    res.json({ message: "Book Deleted Successfully" });
});

app.listen(1000, () => console.log("Server running on port 1000")); [cite: 105]
