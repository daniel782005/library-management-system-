const API_URL = "https://your-backend-url.onrender.com/api/books"; [cite: 55]

async function fetchBooks() {
    const res = await fetch(API_URL);
    const books = await res.json();
    const list = document.getElementById('book-list');
    list.innerHTML = books.map(book => `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.publishedYear}</td>
            <td>
                <button onclick="deleteBook('${book.id}')">Delete</button> [cite: 45]
            </td>
        </tr>
    `).join('');
}

async function addBook() {
    const book = {
        id: document.getElementById('bookId').value,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        category: document.getElementById('category').value,
        publishedYear: document.getElementById('year').value,
        availableCopies: document.getElementById('copies').value
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
    fetchBooks();
}

fetchBooks();
