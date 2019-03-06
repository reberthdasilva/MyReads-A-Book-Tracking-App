import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import ListBooksTitle from './ListBooksTitle'
import OpenSearch from './OpenSearch'

const ListBooks = props => {
  const { listBooks = [], componentLoaded, handleBooks } = props,
    shelfs = [
      {shelf: 'currentlyReading', title: 'Currently Reading'},
      {shelf: 'wantToRead', title: 'Want to Read'},
      {shelf: 'read', title: 'Read'}
    ];
  return (
    <div className="list-books">
      <ListBooksTitle title="MyReads" />
      <div className="list-books-content">
        {componentLoaded ?
          <div>
            {shelfs.map(shelf => (
              <BookShelf
                books={listBooks.filter(book => book.shelf === shelf.shelf)}
                bookShelfTitle={shelf.title}
                handleBooks={handleBooks}
              />
            ))}
          </div>
          :
          <h1>Loading...</h1>
        }
      </div>
      <OpenSearch />
    </div>
  )
}

ListBooks.propTypes = {
  listBooks: PropTypes.array.isRequired,
  componentLoaded: PropTypes.bool.isRequired,
  handleBooks: PropTypes.func.isRequired
}

export default ListBooks;