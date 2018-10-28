import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books:[]
    }
  manageBooks(){
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }
  componentDidMount() {
    this.manageBooks()
  }

  moveShelf= (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.manageBooks();
  }


  render() {

    return (
      <div className="app">

      <MainPage
          books ={this.state.books}
          moveShelf ={this.moveShelf}
          />
          <SearchPage
          moveShelf = {this.moveShelf} />
      </div>
    )
  }
}

export default BooksApp
