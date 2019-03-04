import React from 'react'
import PropTypes from 'prop-types'
import BookAuthor from './BookAuthor'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'
import BookTitle from './BookTitle'

const Book = props => {
  const { book, handleBooks } = props;
  return (
    <div className="book">
      <div className="book-top">
        <BookCover imageLinks={book.imageLinks} />
        <BookShelfChanger book={book} handleBooks={handleBooks} />
      </div>
      <BookTitle title={book.title} />
      <BookAuthor authors={book.authors} />
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleBooks: PropTypes.func.isRequired
}

export default Book;