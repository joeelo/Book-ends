import React, { Component } from "react"
import NoteInstance from "./NoteInstance";
import styled from "styled-components";


const NoteWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    width: 80vw;
    grid-gap: 1rem;
    justify-content: space-around;
    margin: 0 auto;
`


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

        return (
            <NoteWrapper>
                {this.renderNotes()}
            </NoteWrapper>
        )

    }
}

export default UserNotes;