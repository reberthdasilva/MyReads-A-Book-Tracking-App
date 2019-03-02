import React, { Component } from 'react';
import BookAuthor from './BookAuthor';
import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';
import BookTitle from './BookTitle';

export default class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <BookCover />
          <BookShelfChanger />
        </div>
        <BookTitle />
        <BookAuthor />
      </div>
    )
  }
}