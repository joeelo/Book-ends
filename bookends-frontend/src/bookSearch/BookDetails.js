import React, { Component } from "react"

class BookDetails extends Component {
    
    componentDidMount() {
        this.fetchBookById();
    }   

    fetchBookById = async () => {
        try {
            const bookId = this.props.location.pathname.replace("/book/", "")
            const url = `http://localhost:3000/book/id/${bookId}`
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log("error", error)
        }
    }

    render(){
        return (
            <div>
            <p>working</p>
        </div>
        )
    }

} 

export default BookDetails;