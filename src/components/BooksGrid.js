import React from 'react'
import PropTypes from 'prop-types'
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

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  handleBooks: PropTypes.func.isRequired
}

export default BooksGrid;