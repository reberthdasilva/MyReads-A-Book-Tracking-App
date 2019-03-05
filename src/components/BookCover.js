import React from 'react'
import PropTypes from 'prop-types'

const BookCover = props => {
  const { imageLinks } = props;

  const getImage = () => imageLinks && imageLinks.smallThumbnail ? imageLinks.smallThumbnail : ''

  return (
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${getImage()}")` }}></div>
  )
}

BookCover.propTypes = {
  imageLinks: PropTypes.object.isRequired
}

export default BookCover;