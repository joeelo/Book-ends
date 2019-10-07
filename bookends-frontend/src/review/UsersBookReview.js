import React, { Component } from 'react';

class UsersBookReview extends Component {

    state = {
        renderCommentBox: false
    }    

    renderComment = () => {
        this.setState({
            renderCommentBox: !this.state.renderCommentBox
        })
    }

    render() {
        const divStyles = {
            width: "50%", 
            margin: "0 auto", 
            border: "1px solid black"
        }

        const { review, user } = this.props
        console.log(this.props)
        return (
            <div style={divStyles}>
                <p>{review.title} </p>
                <p>{review.content} </p> 
                <p>{user.username}</p>

                </div>
        )
    }
}

export default UsersBookReview;
