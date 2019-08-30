import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const NoteBtn = styled.div`
    top: 20%;
    right: 20px;
    position: fixed;
`

const NoteButton = (props) => {
    return (
        <NoteBtn>
            <Link to="/note"> + </Link>
        </NoteBtn>
    )
}

export default NoteButton