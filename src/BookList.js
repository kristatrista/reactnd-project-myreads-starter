import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookList extends React.Component {
  listOfBooks = {}


  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }
  render(){

    return(
      <div>

      </div>
    )
  }
};
export default BookList;
