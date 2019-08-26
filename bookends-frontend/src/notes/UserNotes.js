import React, { Component } from "react"

class UserNotes extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        // this.fetchNotes();
    }
    
    fetchNotes = async () => {
        const username = this.props.match.params.username
        const url = `http://localhost:3000/notes/${username}`
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    }

    render() {
        return (
            <div>
                
                Working
            </div>
        )

    }
}

export default UserNotes;