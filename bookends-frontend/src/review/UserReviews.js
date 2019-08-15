import React, { Component } from 'react';
import ReviewComment from "./ReviewComment"

class UserReviews extends Component {

    state = {
        renderCommentBox: false
    }    

    renderComment = () => {
        this.setState({
            renderCommentBox: !this.state.renderCommentBox
        })
    }

    render() {
        console.log(this.state.renderCommentBox);
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
                { !this.state.renderCommentBox 
                ? 
                    <button onClick={this.renderComment}>Comment</button>
                : 
                    < ReviewComment renderComment={this.renderComment}/>
                }
            </div>
        )
    }
}

export default UserReviews
