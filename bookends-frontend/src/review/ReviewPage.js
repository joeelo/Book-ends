import React, { Component } from 'react'

export default class ReviewPage extends Component {

    state = {
        bookObj: null
    }

    componentDidMount() {
        this.fetchBookById();
    }

    fetchBookById = async () => {
        try {
            const bookId = this.props.location.pathname.replace("/book/", "");
            const url = `http://localhost:3000/book/id/${bookId}`;
            const response = await fetch(url);
            const json = await response.json();
            this.setState({
                bookObj: json
            })
        } catch (error) {
            console.log("error", error);
        }
    }

    render() {
        console.log(this.props.location.state);
        return (
            <div>
                <form>
                    <input type="text"/>
                </form>
            </div>
        )
    }
}
