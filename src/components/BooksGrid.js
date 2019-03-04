import React from 'react'
import Book from './Book'

const BooksGrid = props => {
  const { books = [], handleBooks } = props;
  return (
    <ol className="books-grid">
      {!books.length ?
        <li>No book to show.</li>
        :
        books.map(book => (
          <li key={book.id}>
            <Book book={book} handleBooks={handleBooks} />
          </li>
        ))
      }
    </ol>
  )
}

export default BooksGrid;