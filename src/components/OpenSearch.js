import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class OpenSearch extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to={{ pathname: "/search", state: { showSearchPage: true } }}>Add a book</Link>
      </div>
    )
  }
}