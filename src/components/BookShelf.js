import React from 'react'
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

export default BookShelf;