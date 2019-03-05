import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Switch, Route } from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import Page404 from './components/Page404'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    isLoaded: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books,
          isLoaded: true
        })
      })
  }

  handleBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books })
      })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/search" render={({ history }) => (
            <SearchBooks
              listBooks={this.state.books}
              handleBooks={this.handleBooks}
            />
          )} />
          <Route exact path="/" render={({ history }) => (
            <ListBooks
              listBooks={this.state.books}
              componentLoaded={this.state.isLoaded}
              handleBooks={this.handleBooks}
            />
          )} />
          <Route component={Page404} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp;