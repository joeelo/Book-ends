import React, { Component } from "react"

class UserNotes extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.fetchNotes();
    }
    
    fetchNotes = () => {
        console.log("fetching notes");
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