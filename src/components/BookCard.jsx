// src/components/BookCard.jsx
import React from "react";

const BookCard = ({ title, author, genre, year, description }) => {
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p className="book-meta"><strong>Author:</strong> {author} • <strong>Genre:</strong> {genre} • <strong>Year:</strong> {year}</p>
      <p className="book-desc">{description}</p>
    </div>
  );
};

export default BookCard;
