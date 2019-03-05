import React from 'react'
import { Link } from 'react-router-dom'
import ListBooksTitle from './ListBooksTitle'

const Page404 = props => {
  return (
    <div className="page-404">
      <ListBooksTitle title="Page 404" />
      <p className="content-404">Sorry, this page does not exist. But you can access the following pages:</p>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </div>
  )
}

export default Page404;