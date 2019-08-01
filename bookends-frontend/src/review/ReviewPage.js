import React, { Component } from 'react'

export default class ReviewPage extends Component {

    state = {
        user: {id: "5d42d6b70adc7a1fda9f9b95"},
        bookObj: this.props.location.state, 
        postTitle: "",
        textValue: ""
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postHandler = async (event) => {
        event.preventDefault();
        const url = `http://localhost:3000/book/${this.state.bookObj.id}/review`;
        const data = {
            user: this.state.user.id,
            title: this.state.postTitle,
            content: this.state.textValue,
            book: this.state.bookObj
        }
        return fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.postHandler}>
                    <input type="text" name="postTitle" value={this.state.postTitle} onChange={this.changeHandler}/>
                    <textarea name="textValue" value={this.state.textValue} onChange={this.changeHandler}/>
                    <button> Post </button>
                </form>
            </div>
        )
    }
}
