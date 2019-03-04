import React from 'react'
import PropTypes from 'prop-types'

const BookCover = props => {
  const { smallThumbnail, thumbnail } = props.imageLinks;
  return (
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${smallThumbnail}")` }}></div>
  )
}

BookCover.propTypes = {
  imageLinks: PropTypes.object.isRequired
}

export default BookCover;