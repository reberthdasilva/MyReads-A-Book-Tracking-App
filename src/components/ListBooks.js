import React from 'react'
import BookShelf from './BookShelf'
import ListBooksTitle from './ListBooksTitle'
import OpenSearch from './OpenSearch'

const ListBooks = props => {
  const { listBooks = [], componentLoaded } = props;
  return (
    <div className="list-books">
      <ListBooksTitle title="MyReads" />
      <div className="list-books-content">
        {componentLoaded ?
          <div>
            <BookShelf books={listBooks.filter(book => book.shelf === 'currentlyReading')} bookShelfTitle="Currently Reading" />
            <BookShelf books={listBooks.filter(book => book.shelf === 'wantToRead')} bookShelfTitle="Want to Read" />
            <BookShelf books={listBooks.filter(book => book.shelf === 'read')} bookShelfTitle="Read" />
          </div>
          :
          <h1>Loading...</h1>
        }
      </div>
      <OpenSearch />
    </div>
  )
}

export default ListBooks;