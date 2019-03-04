import React from 'react'
import BooksGrid from './BooksGrid'
import SearchBooksBar from './SearchBooksBar'

const SearchBooks = props => {
  const { handleBooks } = props;
  return (
    <div className="search-books">
      <SearchBooksBar />
      <div className="search-books-results">
        <BooksGrid handleBooks={handleBooks} />
      </div>
    </div>
  )
}

export default SearchBooks;