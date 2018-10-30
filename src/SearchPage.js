import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchPage extends React.Component {

  state ={
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query);
}

  updateSearchedBooks = (query) => {
    if(query) {
      BooksAPI.search(query).then((searchedBooks) =>{
        if(searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks});
        }
      })
    }else {
      this.setState({ searchedBooks: [] });
      }
    }

  render(){
    console.log('MAINBOOKS', this.props.books);
    console.log('SEARCHEDBOOKS',this.state.searchedBooks);
    let searchedBooks = this.state.searchedBooks;
    return(
      <div className="search-books">
                <div className="search-books-bar">
                  <Link
                  to="/"
                   className="close-search"
                  >Close</Link>
                  <div className="search-books-input-wrapper">

                    <input type="text"
                    placeholder="Search by title or author"
                    value= {this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />

                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                  {
                    searchedBooks.map(searchedBook => {
                      let shelf = 'none'
                      this.props.books.map(book =>{
                          book.id === searchedBook.id ? shelf = book.shelf : 'none';
                      }
                      )
                      return(
                        <li key={searchedBook.id}>
                        <Book

                        moveShelf ={this.props.moveShelf}
                        book={searchedBook}
                        shelf={shelf}
                        />
                        </li>
                      )
                    })
                }
                  </ol>
                </div>
              </div>
    )
  }
};
export default SearchPage;
