import React from 'react'

const BookCover = props => {
  const { smallThumbnail, thumbnail } = props.imageLinks;
  return (
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${smallThumbnail}")` }}></div>
  )
}

export default BookCover;