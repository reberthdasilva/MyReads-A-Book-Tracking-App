import React from 'react'
import PropTypes from 'prop-types'

const BookAuthor = props => {
  const { authors } = props;
  return (
    <div className="book-authors">{authors.join(' / ')}</div>
  )
}

BookAuthor.propTypes = {
  authors: PropTypes.array.isRequired
}

export default BookAuthor;