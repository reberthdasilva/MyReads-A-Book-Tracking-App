import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import BooksGrid from './BooksGrid'
import SearchBooksBar from './SearchBooksBar'

class SearchBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booksResearched: []
    }
  }

  searchBooks = value => {
    BooksAPI.search(value).then(books => {
      books = books.map(book => {
        this.props.listBooks.forEach(element => {
          if (element.id === book.id) book.shelf = element.shelf;
        });
        return book;
      })

      this.setState({
        booksResearched: books
      })
    })
  }

  render() {
    return (
      <div className="search-books" >
        <SearchBooksBar searchBooks={this.searchBooks} />
        <div className="search-books-results">
          <BooksGrid books={this.state.booksResearched} handleBooks={this.props.handleBooks} />
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  handleBooks: PropTypes.func.isRequired
}

export default SearchBooks;