import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    isLoaded: false
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(res => {
        this.setState({
          books: res,
          isLoaded: true
        })
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={({ history }) => (
          <SearchBooks />
        )} />
        <Route exact path="/" render={() => (
          <ListBooks listBooks={this.state.books} componentLoaded={this.state.isLoaded} />
        )} />
      </div>
    )
  }
}

export default BooksApp;