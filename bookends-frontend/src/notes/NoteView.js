import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NoteView extends Component {

    state = {
        note: {}
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

    render() {
        const { note } = this.state
        console.log(note);

        return (
            <div>
                
                <h2> {note.title} </h2>
                <p> {note.content} </p>

                <Link to={{
                    pathname: `/notes/${note._id}/edit`,
                    state: {noteTitle: note.title, noteContent: note.content}
                }}> 
                
                <button>Edit</button>
                </Link>
                <button>Delete</button>
            </div>
        )
    }
}

export default NoteView