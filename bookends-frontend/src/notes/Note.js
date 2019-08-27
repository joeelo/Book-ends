import React, { Component } from 'react'

class Note extends Component {

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
            console.log(json);    
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
                <h1> Write a Note! </h1>

                <form onSubmit={this.submitHandler}>

                    <input name="noteTitle" value={this.state.noteTitle} onChange={this.changeHandler} placeholder="Title..."/> <br/>
                    <input name="noteContent" value={this.state.noteContent} onChange={this.changeHandler} placeholder="make your note!"/> <br/>
                    <button> Post Note </button>

                </form>

            </div>
        )
    }
}

export default Note