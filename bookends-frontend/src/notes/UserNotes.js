import React, { Component } from "react"
import NoteInstance from "./NoteInstance"

class UserNotes extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.fetchNotes();
    }
    
    fetchNotes = async () => {
        const username = this.props.match.params.username
        const url = `http://localhost:3000/notes/${username}`
        const response = await fetch(url);
        const json = await response.json();
        this.setState({
            notes: json
        })
    }

    renderNotes = () => {
        const notes = this.state.notes.map((note) => {
            return <NoteInstance key={note._id} note={note}/>
        })
        return notes;
    }

    render() {

        const styles = {
            textAlign: "center",
            margin: "0 auto",
            width: "75%"
        }

        return (
            <div style={styles}>
                {this.renderNotes()}
            </div>
        )

    }
}

export default UserNotes;