import React, { Component } from 'react';
import UsersBook from "./UsersBook";
import styled from "styled-components";
import { Container } from "../styles/styledElements";
import randomColorGenerator from "../styles/randomColorGenerator";

const ProfileContainer = styled(Container)`
    width: 100vw;
`

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    width: 100%;
    height: 150px;
    align-items: baseline;
    justify-content: baseline;
`

const BaseLineH1 = styled.h1`
    align-self: flex-end;
    padding-left: 10%;
    margin: 0;
    font-family: Playfair Display, serif;
    font-size: 48px;
`

const LeftContainer = styled.div`

`

class ProfileInfo extends Component {

    state = {
        books: null,
        backgroundColor: ``
    }

    componentDidMount() {
        this.fetchAllUserBooks();
        const randomColor = randomColorGenerator();
        this.setState({backgroundColor: randomColor});

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
        console.log(randomColorGenerator());
        const style = {
            backgroundColor: this.state.backgroundColor
        }
        return (
            <ProfileContainer>

                <Header style={style}>
                    <BaseLineH1> Your Profile </BaseLineH1>
                </Header>

                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.email}</h2>

                <h3>My Books</h3>
                {this.state.books ? this.renderUsersBookList() : null}
            </ProfileContainer>
        )
    }
}

export default ProfileInfo