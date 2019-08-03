import React, { Component } from 'react'

export default class ProfileInfo extends Component {

    state = {

    }

    componentDidMount() {

    }

    fetchAllUserBooks = async () => {
        try {
                
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
