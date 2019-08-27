import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NoteInstance extends Component {
    render() {
        const { note } = this.props;
        return (
            <div>
                <h2> {note.title} </h2>
                <p> {note.content} </p>
                <Link to={{
                    pathname: `/notes/${note._id}/view`,
                    state: {noteTitle: note.title, noteContent: note.content}
                }}>
                    <button> view </button>
                </Link>
            </div>
        )
    }
}

export default NoteInstance;