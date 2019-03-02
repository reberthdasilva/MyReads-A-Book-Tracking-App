import React, { Component } from 'react';
import BookShelf from './BookShelf';
import ListBooksTitle from './ListBooksTitle'
import OpenSearch from './OpenSearch'

export default class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <ListBooksTitle title="MyReads" />
        <div className="list-books-content">
          <div>
            <BookShelf bookShelfTitle="Currently Reading" />
            <BookShelf bookShelfTitle="Want to Read" />
            <BookShelf bookShelfTitle="Read" />
          </div>
        </div>
        <OpenSearch />
      </div>
    )
  }
}