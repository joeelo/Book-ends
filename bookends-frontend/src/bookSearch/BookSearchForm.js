import React, { Component } from 'react'
import BookThumbnail from "./BookThumbnail"

export default class BookSearchForm extends Component {

    state = {
        title: "",
        books: []
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.fetchBooks();
    }

    fetchBooks = async () => {
        try {
            const book = this.state.title.replace(" ", "+");
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
            const books = this.state.books.map((book, index) => {
                return <BookThumbnail key={index} book={book} />
            })
            return books
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <input name="title" value={this.state.title} onChange={this.handleChange} />
                    <button> search </button>
                </form>
                {this.renderBooks()}
            </div>
        )
    }
}
