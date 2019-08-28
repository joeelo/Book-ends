import React, { Component } from 'react';
import BookThumbnail from "./BookThumbnail";
import styled from "styled-components";
import { withRouter } from "react-router-dom";


const FormContainer = styled.form`
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchBar = styled.input`
    padding: 20px 100px;
    background: transparent;
    font-size: 2em;
    border: 0 0 5px 0;
`

class BookSearchForm extends Component {

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
        this.props.updateSearchTerm(this.state.title);
        this.props.history.push("/books/view");
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
                <FormContainer onSubmit={this.handleSubmit}> 
                    <SearchBar name="title" value={this.state.title} onChange={this.handleChange} />
                    <button> search </button>
                </FormContainer>
                {/* {this.renderBooks()} */}
            </div>
        )
    }
}

export default withRouter(BookSearchForm);