import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './components/MainPage'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

  render() {

    return (
      <div className="app">

          <MainPage
          books ={this.state.books} />
      </div>
    )
  }
}

export default BooksApp
