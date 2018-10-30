import React from 'react'
import { Route } from 'react-router-dom'
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
      <Route exact path="/" render={() =>(
        <MainPage
            books ={this.state.books}
            moveShelf ={this.moveShelf}
            />
      )} />

      <Route exact path="/search" render={() =>(
        <SearchPage
        moveShelf = {this.moveShelf}
        books={this.state.books}
        manageBooks ={this.manageBooks}
          />
      )} />


      </div>
    )
  }
}

export default BooksApp
