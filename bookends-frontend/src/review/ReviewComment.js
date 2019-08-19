import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class ReviewComment extends Component {

    state = {
        textValue: ""
    }

    changeHandler = (event) => {
        this.setState({
            textValue: event.target.value
        })
    }
    
    postComment = async () => {
        const bookId = this.props.match.url.split("/")[2]; // seperate the book id straight from the url. ie /book/giaLDgAAQBAJ === book id
        try {
            const data = {
                content: this.state.textValue
            }

            const url = `http://localhost:3000/book/${bookId}/review/comment`
            const config = {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(data)
            }

            const response = await fetch(url, config);
            const json = await response.json();
            console.log(json);

        } catch (error) {
            
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.postComment();
        this.props.renderComment();
        console.log(this.props.user);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text-area" onChange={this.changeHandler}/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewComment)
