import React from 'react'
import BookAuthor from './BookAuthor'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'
import BookTitle from './BookTitle'

const Book = props => {
  const { book } = props;
  console.log(book);
  return (
    <div className="book">
      <div className="book-top">
        <BookCover imageLinks={book.imageLinks} />
        <BookShelfChanger book={book} />
      </div>
      <BookTitle title={book.title} />
      <BookAuthor authors={book.authors} />
    </div>
  )
}

export default Book;