import React from 'react'
import PropTypes from 'prop-types'

const BookCover = props => {
  const { imageLinks, title } = props;

  const getImage = () => imageLinks && imageLinks.smallThumbnail ?
    imageLinks.smallThumbnail : `https://dummyimage.com/128x170/eee/000.jpg&text=${title}`

  return (
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${getImage()}")` }}></div>
  )
}

BookCover.propTypes = {
  imageLinks: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default BookCover;