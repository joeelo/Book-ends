import React, { Component } from 'react'

export default class ProfileInfo extends Component {



    render() {
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <h2>{this.props.user.email}</h2>
            </div>
        )
    }
}
