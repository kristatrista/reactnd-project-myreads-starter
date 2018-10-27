import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class MainPage extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  render(){
console.log('BOOKS', this.state.books);
    const shelfTitle ="";
    const newVarBooks = this.state.books;
    console.log('newVarBooks', newVarBooks);
    return(
      <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

          <BookShelf
          books={newVarBooks}
          />

          <BookShelf
          shelfTitle= {"Want to Read"}
          />

          <BookShelf
           shelfTitle= {"Read"}
           />

          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
      </div>
    )
  }
};
export default MainPage;
