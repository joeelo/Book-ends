import React, { Component } from 'react'
import BookThumbnail from '../book/BookThumbnail';

export default class ReviewPage extends Component {

    state = {
        bookObj: "", 
        postTitle: "",
        textValue: "", 
    }

    componentDidMount() {
        console.log(this.props);
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postHandler = async (event) => {
        event.preventDefault();
        try {
            if (this.state.bookObj.id) {
                const data = {
                    user: this.props.user.id,
                    title: this.state.postTitle,
                    content: this.state.textValue,
                    book: this.state.bookObj.id,
                    bookObj: this.state.bookObj
                }
                const url = `http://localhost:3000/book/${this.state.bookObj.id}/review`;
                console.log("posted");
                return fetch(url, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })

            } else {
                console.log("something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.props);
        const book = this.props.location.state.bookObj;

        return ( 
            this.props.location.state.bookObj

            ? 
                <div>
                    <BookThumbnail book={book}/>
                    
                    <h1> {book.volumeInfo.title} </h1>
                    <span> Post a review </span>

                    <form onSubmit={this.postHandler}>
                        <label htmlFor="postTitle"> Title of your post </label> <br/>
                        <input type="text" name="postTitle" value={this.state.postTitle} onChange={this.changeHandler}/> <br/>
                        <textarea name="textValue" value={this.state.textValue} placeholder="Write review here" onChange={this.changeHandler}/> <br/>
                        <button> Post </button>
                    </form>
                </div> 

            :

            null
        )
    }
}
