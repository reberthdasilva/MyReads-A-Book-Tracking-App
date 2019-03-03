import React from 'react'

const BookAuthor = props => {
  const { authors = [] } = props;
  return (
    <div className="book-authors">{authors.join(' / ')}</div>
  )
}

export default BookAuthor;