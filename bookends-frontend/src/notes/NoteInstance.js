import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NoteInstance extends Component {
    render() {
        const { note } = this.props;
        console.log(note);
        return (
            <div>
                <h2> {note.title} </h2>
                <p> {note.content} </p>
                <Link to={{
                    pathname: `/notes/${note._id}/edit`,
                    state: {noteTitle: note.title, noteContent: note.content}
                }}>
                    <button> edit </button>
                </Link>
                <button> delete </button>
            </div>
        )
    }
}

export default NoteInstance;