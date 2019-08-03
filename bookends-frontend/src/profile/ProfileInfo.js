import React, { Component } from 'react'

export default class ProfileInfo extends Component {

    state = {

    }

    componentDidMount() {
        this.fetchAllUserBooks();
    }

    fetchAllUserBooks = async () => {
        try {
            const url = `http://localhost:3000/user/show/${this.props.user.id}`;
            const response = await fetch(url);
            const json = await response.json();   
            console.log(json);    
        } catch (error) {
            
        }
    }

    fetchAllNotes = async () => {

    }

    render() {
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <h2>{this.props.user.email}</h2>
            </div>
        )
    }
}
