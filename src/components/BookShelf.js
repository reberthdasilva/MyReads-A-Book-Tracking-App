import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const BookShelf = props => {
  const { books, bookShelfTitle, handleBooks } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={books} handleBooks={handleBooks} />
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  bookShelfTitle: PropTypes.string.isRequired,
  handleBooks: PropTypes.func.isRequired
}

export default BookShelf;