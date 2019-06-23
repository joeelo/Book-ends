import React, { Component } from 'react';

class Test extends Component {


    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = async () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
    }

    render() {
        return (
            <div>
                Working
            </div>
        );
    }
}

export default Test;