import React, { Component } from 'react';
import UsersBook from "./UsersBook";
import styled from "styled-components";

class ProfileInfo extends Component {

    state = {
        books: null
    }

    componentDidMount() {
        this.fetchAllUserBooks();
    }

    fetchAllUserBooks = async () => {
        try {
            const url = `http://localhost:3000/user/show/${this.props.user.id}`;
            const response = await fetch(url);
            const json = await response.json();   
            this.setState({
                books: json
            })  
        } catch (error) {
            console.log(error);
        }
    }

    fetchAllNotes = async () => {

    }

    renderUsersBookList = () => {
        const booksArray = this.state.books.books.map((book, index) => {
           return <UsersBook key={index} book={book}/>
        })
        return booksArray;
    }

    render() {
        console.log(this.state.books);
        return (
            <div>

                <h1> Your Profile </h1>
                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.email}</h2>

                <h3>My Books</h3>
                {this.state.books ? this.renderUsersBookList() : null}
            </div>
        )
    }
}

export default ProfileInfo