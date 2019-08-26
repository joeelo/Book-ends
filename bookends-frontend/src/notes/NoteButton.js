import React from "react";
import { Link } from "react-router-dom"

const NoteButton = (props) => {
    return (
        <div className="note-button">
            <Link to="/note"> + </Link>
        </div>
    )
}

export default NoteButton