import React, { Component } from 'react';
import styled from "styled-components";
import { withRouter } from "react-router-dom";


const FormContainer = styled.form`
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-right: 10px;
`

const SearchBar = styled.input`
    padding: 10px 50px;
    background: transparent;
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
        this.props.updateSearchTerm(this.state.title);
        this.props.history.push("/books/view");
    }

    render() {
        return (
            <div>
                <FormContainer onSubmit={this.handleSubmit}> 
                    <SearchBar name="title" value={this.state.title} onChange={this.handleChange} />
                    <button> search </button>
                </FormContainer>
            </div>
        )
    }
}

export default withRouter(BookSearchForm);