import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const r = 255 - ((Math.random() + 1) * 60);
const g = 255 - ((Math.random() + 1) * 60);
const b = 255 - ((Math.random() + 1) * 60);



const increaseSize = keyframes`
    0% {tranform: scale(1.0125) }
    50% {transforma: scale(1.025)}
    75% {transforma: scale(1.0375)}
    100%{transform: scale(1.05)}
`

const Note = styled.div`
    display: flex;
    height: 60vh;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-around;
    text-align: center;
    margin-top: 2rem;
    padding: 0 20px;

    :hover {
        animation: ${increaseSize} .25s ease-in-out;
        animation-fill-mode: forwards;
    }

`

const NoteHeader = styled.h1`
    font-family: Playfair Display, serif;
    font-weight: 400;
`

const NoteContent = styled.p`
    font-family: Lato, sans-serif;
`

const ViewButton = styled.button`
    padding: 10px 20px;
    align-self: flex-end;
    border: 0;
    cursor: pointer;
    justify-self: baseline;
    transition-duration: 0.5s;
    transition: all ease;

    :hover {
        text-decoration: underline;
    }
`

const TopWrapper = styled.div`
    display: flex; 
    justify-content: center;
    flex-direction: column;
`

const BottomWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const titleCase = (str) => {
    const titledString = str.toLowerCase().split(" ");

    for (let i = 0; i < titledString.length; i++) {
        titledString[i] = titledString[i].charAt(0).toUpperCase() + titledString[i].substring(1);
    }
    return titledString.join(" ");
}

class NoteInstance extends Component {

    
    render() {

        const style = {
            backgroundColor: this.props.randomColor
        }

        const { note } = this.props;
        return (
            <Note style={style}>
                <TopWrapper>
                    <NoteHeader> {titleCase(note.title)} </NoteHeader>
                    <NoteContent> {note.content} </NoteContent>
                </TopWrapper>

                <BottomWrapper>
                    <Link to={`/notes/${note._id}/view`}>
                        <ViewButton> view </ViewButton>
                    </Link>
                </BottomWrapper>
            </Note>
        )
    }
}

export default NoteInstance;