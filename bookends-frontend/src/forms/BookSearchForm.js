import React, { Component } from 'react';
import styled from "styled-components";
import { withRouter } from "react-router-dom";

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
        this.props.updateSearchTerm(this.state.title);
        this.props.history.push("/books/view");
    }

    render() {
        return (
            <div>
                <FormContainer onSubmit={this.handleSubmit} autoComplete="off"> 
                    <SearchBar name="title" value={this.state.title} onChange={this.handleChange} placeholder={"search your book"}/>
                    <MagButton> <MagnifyingGlassImg alt="magnifying glass icon" src="/images/magnifyingGlass.png"/> </MagButton>
                </FormContainer>
            </div>
        )
    }
}

export default withRouter(BookSearchForm);

const FormContainer = styled.form`
    margin: 5px auto 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-right: 10px;
`

const SearchBar = styled.input`
    padding: 10px;
    width: 250px;
    background: transparent;
    border: none;
    margin-top: 20px;
    border-bottom: 2px solid teal;
    font-size: 16px;
    font-family: Lato, sans-serif;
    transition: .5s ease-in-out;

    :focus {
        outline: none;
        border-bottom: 2px solid #FF7561;
    }

    :hover {
        border-bottom: 2px solid #FF7561;
    }
`

const MagButton = styled.button`
    border: 0;
    padding: 0;
    margin-top: 30px;
`

const MagnifyingGlassImg = styled.img`
    height: 25px;
    width: 25px;
    margin-left: 5px;
    background-color: inherit;
    cursor: pointer;
`