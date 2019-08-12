import React, { Component } from 'react'

class UserReviews extends Component {

    render() {
        const divStyles = {
            width: "50%", 
            margin: "0 auto", 
            border: "1px solid black"
        }

        const { review } = this.props
        return (
            <div style={divStyles}>
                <p>{review.title} </p>
                <p>{review.content} </p>
                <button>Comment</button>
            </div>
        )
    }
}

export default UserReviews
