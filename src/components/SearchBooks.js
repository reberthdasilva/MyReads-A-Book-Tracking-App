import React, { Component } from 'react'
import BooksGrid from './BooksGrid'
import SearchBooksBar from './SearchBooksBar'

export default class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBooksBar />
        <div className="search-books-results">
          <BooksGrid />
        </div>
      </div>
    )
  }
}