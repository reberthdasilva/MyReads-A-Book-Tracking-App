import React from 'react'
import Book from './Book'

const BooksGrid = props => {
  const { books = [] } = props;
  return (
    <ol className="books-grid">
      {!books.length ?
        <li>No book to show.</li>
        :
        books.map(book => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))
      }
    </ol>
  )
}

export default BooksGrid;