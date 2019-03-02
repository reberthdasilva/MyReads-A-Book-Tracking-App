import React, { Component } from 'react';
import BooksGrid from './BooksGrid';

export default class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <BooksGrid />
        </div>
      </div>
    )
  }
}