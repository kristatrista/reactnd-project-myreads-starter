import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends React.Component {

  render(){
 console.log('shelfSuccess', this.props.books)
     const shelfTitle ="Currently Reading";
    return(
        <div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">


                <Book books={this.props.books}

  

                />

            </ol>
          </div>
        </div>
        </div>
    )
  }
};
export default BookShelf;
