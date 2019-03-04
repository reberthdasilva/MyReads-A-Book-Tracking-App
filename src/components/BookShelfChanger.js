import React from 'react'
import * as BooksAPI from '../BooksAPI'

const BookShelfChanger = props => {
  const { book, handleBooks } = props;

  const bookChanger = (book, shelf) =>
    BooksAPI.update(book, shelf).then(
      res => handleBooks()
    )

  return (
    <div className="book-shelf-changer">
      <select defaultValue="move" onChange={(e) => bookChanger(book, e.target.value)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger;