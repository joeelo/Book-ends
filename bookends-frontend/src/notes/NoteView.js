import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, NoteContainer } from "../styles/styledElements";
import NoteDeletePrompt from "./NoteDeletePrompt";
// import PublicButton from "../buttons/PublicButton"

const EditButton = styled(Button)`
    &:hover {
        background-color: rgba(50, 255, 255, .5);
    }
`

const DeleteButton = styled(Button)`   
    &:hover {
        background-color: rgba(255, 100, 100, .7);
    }
`

const NoteHeading = styled.h1`
    background-color: white;
    width: 90%;
    padding: 15px;
    font-family: Playfair Display, serif; 
    font-weight: 400;
`

const NoteContent = styled.p`
    width: 90%;
    background-color: white;
    margin-top: 20px;
    min-height: 400px;
    padding: 10px 15px;
    font-family: Lato, sans-serif;
`

class NoteView extends Component {

    state = {
        note: {}, 
        showPrompt: false,
        randomColor: ""
    }

    componentDidMount(){
        this.fetchNote();
        this.generateRandomColor();
    }

    fetchNote = async () => {
        try {
            const id = this.props.match.params.id;
            const url = `http://localhost:3000/notes/${id}/view`;
            const response = await fetch(url);
            const json = await response.json();
            this.setState({
                note: json
            })
        } catch (error) {
            console.log(error);
        }
    }

    renderPrompt = () => this.setState({showPrompt: true});

    closePrompt = () => this.setState({showPrompt: false});

    generateRandomColor = () => {
        const r = 255 - ((Math.random() + 1) * 60);
        const g = 255 - ((Math.random() + 1) * 60);
        const b = 255 - ((Math.random() + 1) * 60);

        const color = `rgb(${r}, ${g}, ${b})`
        this.setState({randomColor: color});
    }

    render() {
        const { note } = this.state
        console.log(this.state);

        const style = {
            backgroundColor: this.state.randomColor
        }

        return (
            <NoteContainer style={style}>
                
                <NoteHeading> {note.title} </NoteHeading>
                <NoteContent> {note.content} </NoteContent>

                <Link to={{
                    pathname: `/notes/${note._id}/edit`,
                    state: {noteTitle: note.title, noteContent: note.content}
                }}> 
                    <EditButton> Edit </EditButton>
                </Link>

                <DeleteButton onClick={this.renderPrompt}> Delete </DeleteButton>
                {/* <PublicButton public={note.private}/> */}
                {
                    this.state.showPrompt 
                    ?
                        <NoteDeletePrompt closePrompt={this.closePrompt} noteId={this.state.note._id}/>
                    :
                        null
                }
            </NoteContainer>
        )
    }
}

export default NoteView