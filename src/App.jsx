// src/App.jsx
import React from "react";
import BookCard from "./components/BookCard";
import "./index.css";

const books = [
  {
    id: 1,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    year: 2011,
    description: "A sweeping history that examines how Homo sapiens came to dominate the planet."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    description: "A classic novel about racial injustice and moral growth in the American South."
  },
  {
    id: 3,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    year: 2003,
    description: "A fast-paced mystery that mixes art, religion and codes in a modern thriller."
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    genre: "Non-Fiction",
    year: 2018,
    description: "A memoir about a woman who grows up in a strict household and seeks education."
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fiction",
    year: 1937,
    description: "A fantasy adventure that precedes the Lord of the Rings saga."
  }
];

function getMostCommonGenre(booksArr) {
  const counts = {};
  booksArr.forEach(b => counts[b.genre] = (counts[b.genre] || 0) + 1);
  // manual selection: choose the genre with the highest count
  let maxGenre = null, maxCount = 0;
  for (const g in counts) {
    if (counts[g] > maxCount) { maxCount = counts[g]; maxGenre = g; }
  }
  return maxGenre;
}

export default function App() {
  const totalBooks = books.length;
  const mostCommonGenre = getMostCommonGenre(books);

  return (
    <div className="container">
      <header className="header">
        <h1>My Book Collection</h1>
        <p className="subtitle">Books That Changed My Perspective</p>
      </header>

      <section className="summary">
        <p><strong>Total books:</strong> {totalBooks}</p>
        <p><strong>Most common genre:</strong> {mostCommonGenre}</p>
      </section>

      <section className="books-grid">
        {books.map(book => (
          <BookCard key={book.id} {...book} />
        ))}
      </section>

      <footer className="footer">
        <p>© 2025 Book Lover</p>
        <p>Created by: Your Name Here • your.email@example.com</p>
      </footer>
    </div>
  );
}
