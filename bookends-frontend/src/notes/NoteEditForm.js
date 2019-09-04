import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class NoteEditForm extends Component {

    state = {
        noteTitle: this.props.history.location.state.noteTitle,
        noteContent: this.props.history.location.state.noteContent,
        user: this.props.user
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
            const response = await fetch(url, config);
            const json = await response.json();
            
            this.props.history.push(`/notes/${id}/view`);
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
        return (
            <div>
                <h1> Edit a Note! </h1>

                <form onSubmit={this.submitHandler}>

                    <input name="noteTitle" value={this.state.noteTitle} onChange={this.changeHandler} placeholder="Title..."/> <br/>
                    <input name="noteContent" value={this.state.noteContent} onChange={this.changeHandler} placeholder="make your note!"/> <br/>
                    <button> Done editing </button>

                </form>

            </div>
        )
    }
}

export default withRouter(NoteEditForm);