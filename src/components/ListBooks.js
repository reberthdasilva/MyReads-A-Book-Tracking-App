import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import ListBooksTitle from './ListBooksTitle'
import OpenSearch from './OpenSearch'

const ListBooks = props => {
  const { listBooks = [], componentLoaded, handleBooks } = props;
  return (
    <div className="list-books">
      <ListBooksTitle title="MyReads" />
      <div className="list-books-content">
        {componentLoaded ?
          <div>
            <BookShelf
              books={listBooks.filter(book => book.shelf === 'currentlyReading')}
              bookShelfTitle="Currently Reading"
              handleBooks={handleBooks}
            />
            <BookShelf
              books={listBooks.filter(book => book.shelf === 'wantToRead')}
              bookShelfTitle="Want to Read"
              handleBooks={handleBooks}
            />
            <BookShelf
              books={listBooks.filter(book => book.shelf === 'read')}
              bookShelfTitle="Read"
              handleBooks={handleBooks}
            />
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