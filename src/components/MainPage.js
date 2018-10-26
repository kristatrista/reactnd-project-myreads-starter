import React, { Component } from 'react'

import BookShelf from './BookShelf'

class MainPage extends React.Component {
  render(){

    const shelfTitle ="";
    return(
      <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <BookShelf bookList = {this.props.books} shelfTitle= {"Currently Reading"}/>
          <BookShelf shelfTitle= {"Want to Read"}/>
          <BookShelf shelfTitle= {"Read"}/>
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
