import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Container as NoteContainer, Button } from "../styles/styledElements";
import { NoteForm, NoteHeadingInput, NoteContentInput} from "../styles/styledforms"
import randomColorGenerator from "../styles/randomColorGenerator";

class NoteEditForm extends Component {

    state = {
        noteTitle: this.props.history.location.state.noteTitle,
        noteContent: this.props.history.location.state.noteContent,
        user: this.props.user,
        backgroundColor: ""
    }

    componentDidMount() {
        this.setState({backgroundColor: randomColorGenerator()});
    }

    submitHandler = async (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;
        try {
            const url = `http://localhost:3000/notes/${id}/edit`;
            const data = {user: this.props.user, title: this.state.noteTitle, content: this.state.noteContent}
            const config = {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }
            fetch(url, config);
            this.props.history.push({
                pathname: `/notes/${id}/view`, 
                state: { username: this.props.user }
            });
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
            backgroundColor: this.state.backgroundColor
        }

        return (
            <NoteContainer style={style}>

                <NoteForm onSubmit={this.submitHandler}>
                    <NoteHeadingInput name="noteTitle" value={this.state.noteTitle} onChange={this.changeHandler} placeholder="Title..." autoFocus={true}/> <br/>
                    <NoteContentInput name="noteContent" value={this.state.noteContent} onChange={this.changeHandler} placeholder="make your note!"/> <br/>
                    <Button> Done editing </Button>
                </NoteForm>

            </NoteContainer>
        )
    }
}

export default withRouter(NoteEditForm);