import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// import styled from "styled-components";
import { Container as NoteContainer, Button } from "../styles/styledElements";
import { NoteForm, NoteHeadingInput, NoteContentInput} from "../styles/styledforms"

// const Header = styled.h1`
    
// `

class NewNoteForm extends Component {

    state = {
        noteTitle: "",
        noteContent: "",
        user: this.props.user
    }

    submitHandler = async (event) => {
        event.preventDefault();
        try {
            const url = `http://localhost:3000/notes`
            const data = {user: this.props.user, title: this.state.noteTitle, content: this.state.noteContent}
            const config = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }
            
            const response = await fetch(url, config);
            const json = await response.json();
            const newNoteUrl = json._id;
            console.log(data.user)
            this.props.history.push(`/notes/${data.user.userName}`)
        } 
        catch (error) {
            console.log(error);
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        const style = {
            backgroundColor: `rgb(190, 184, 191)`
        }

        return (
            <div>
                {/* <h1> Write a Note! </h1> */}
                <NoteContainer style={style}>

                    <NoteForm onSubmit={this.submitHandler}>

                        <NoteHeadingInput name="noteTitle" value={this.state.noteTitle} onChange={this.changeHandler} placeholder="Title..."/> <br/>
                        <NoteContentInput name="noteContent" value={this.state.noteContent} onChange={this.changeHandler} placeholder="Speak your mind!"/> <br/>
                        <Button> Post Note </Button>

                    </NoteForm>
                </NoteContainer>


            </div>
        )
    }
}

export default withRouter(NewNoteForm);