import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchBooksBar = props => {
  const { searchBooks } = props;

  const handleSearchBooks = event => {
    searchBooks(event.target.value);
  }

  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" onChange={handleSearchBooks} />
      </div>
    </div>
  )
}

SearchBooksBar.propTypes = {
  searchBooks: PropTypes.func.isRequired
}

export default SearchBooksBar;