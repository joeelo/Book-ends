import React from 'react';
import styled from "styled-components";
import { Button } from "../styles/styledElements";

const clickHandler = (props) => {
    console.log(props.book);
    console.log(props.user);
    const url = `http://localhost:3000/books` 
    const data = {
        any: props.book,
        user: props.user,
        finished: true
    };
    return fetch(url, {
        method: "POST",
        mode: "cors", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
    });
}

const AddReadBook = (props) => {
    return (
            <AddBookButton onClick={() => clickHandler(props)}> Read </AddBookButton>
    )
} 

export default AddReadBook;

const AddBookButton = styled(Button)`
    width: 50%;

    :hover {
        background-color: teal;
        color: white;
    }
`