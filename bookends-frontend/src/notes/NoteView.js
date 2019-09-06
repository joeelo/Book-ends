import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import PublicButton from "../buttons/PublicButton"
import NoteDeletePrompt from "./NoteDeletePrompt";

const r = 255 - ((Math.random() + 1) * 100);
const g = 255 - ((Math.random() + 1) * 100);
const b = 255 - ((Math.random() + 1) * 100);

const Button = styled.button`
    padding: 10px 15px;
    transition: .5s ease-in-out all;
    background-color: white;
    border: 1px solid black;
`

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

const NoteContainer = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: rgba(${r}, ${g}, ${b}, 0.5);
    padding: 10px;
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
    padding: 10px 15px;;
    font-family: Lato, sans-serif;
`

class NoteView extends Component {

    state = {
        note: {}, 
        showPrompt: false
    }

    componentDidMount(){
        this.fetchNote();
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

    render() {
        const { note } = this.state
        console.log(note);

        return (
            <NoteContainer>
                
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