import React, { Component } from 'react'

class BookContainer extends Component {

    state = {
        books: []
    }

    render() {
        console.log(this.props);
        return (
            <div>
                working
            </div>
        )
    }
}

export default BookContainer 