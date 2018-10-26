import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends React.Component {
  render(){
          console.log(this.props.bookList);
     const shelfTitle ="Currently Reading";
    return(
        <div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <Book />
              </li>
              <li>
                <Book />
              </li>
            </ol>
          </div>
        </div>
        </div>
    )
  }
};
export default BookShelf;
