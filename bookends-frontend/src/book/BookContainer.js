import React, { Component } from 'react';
import BookThumbnail from "./BookThumbnail";

class BookContainer extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        console.log(this.props.searchTerm);
        this.fetchBooks();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchTerm !== this.props.searchTerm) {
            this.fetchBooks();
        }
    }

    fetchBooks = async () => {
        try {
            const book = this.props.searchTerm.replace(" ", "+");
            const url = `http://localhost:3000/book/${book}`;
            const response = await fetch(url);
            const json = await response.json();
            this.setState({
                books: json
            })
        } catch (error) {
            this.setState({
                books: []
            })
        }
    }

    renderBooks = () => {
        try { 
            const books = this.state.books.map((book, index) => (
                <BookThumbnail key={index} book={book} />
            ))
            return books
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                {this.renderBooks()}
            </div>
        )
    }
}

export default BookContainer 