import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container as NoteContainer, Button } from "../styles/styledElements";
import { NoteHeading, NoteContent } from "../styles/styledElements"
import NoteDeletePrompt from "./NoteDeletePrompt";
import randomColorGenerator from "../styles/randomColorGenerator";
// import PublicButton from "../buttons/PublicButton"

const ButtonContainer = styled.div`
    display: flex;
    width: 150px;
    margin: 0 auto;
    justify-content: space-between;
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



class NoteView extends Component {

    state = {
        note: {}, 
        showPrompt: false,
        backgroundColor: ""
    }

    componentDidMount(){
        this.fetchNote();
        this.setState({backgroundColor: randomColorGenerator()});
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
        const username = this.props.location.state.username;
        const style = {
            backgroundColor: this.state.backgroundColor
        }

        return (
            <NoteContainer style={style}>
                
                <NoteHeading> {note.title} </NoteHeading>
                <NoteContent> {note.content} </NoteContent>

                <ButtonContainer>
                    <Link to={{
                        pathname: `/notes/${note._id}/edit`,
                        state: {noteTitle: note.title, noteContent: note.content}
                    }}> 
                        <EditButton> Edit </EditButton>
                    </Link>
                    <DeleteButton onClick={this.renderPrompt}> Delete </DeleteButton>
                </ButtonContainer>
                {/* <PublicButton public={note.private}/> */}
                {
                    this.state.showPrompt 
                    ?
                        <NoteDeletePrompt closePrompt={this.closePrompt} noteId={this.state.note._id} username={username}/>
                    :
                        null
                }
            </NoteContainer>
        )
    }
}

export default NoteView