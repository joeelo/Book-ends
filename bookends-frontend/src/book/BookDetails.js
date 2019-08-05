import React, { Component } from "react"
import { Link } from "react-router-dom"
import RatingSelectForm from "./RatingSelectForm"

class BookDetails extends Component {

    state = {
        bookObj: null,
        showForm: false,
    }
    
    componentDidMount() {
        this.fetchBookById();
    }   

    fetchBookById = async () => {
        try {
            const bookId = this.props.location.pathname.replace("/book/", "")
            const url = `http://localhost:3000/book/id/${bookId}`
            const response = await fetch(url);
            const json = await response.json();
            this.setState({
                bookObj: json
            })
        } catch (error) {
            console.log("error", error)
        }
    }



    render(){
        console.log(this.state.bookObj);
        return (
            <div>
                {this.state.bookObj !== null 
                ?   
                    <div>
                        <h2>{this.state.bookObj.volumeInfo.title}</h2>
                        <Link to={{
                            pathname:`/book/${this.state.bookObj.id}/review`,
                            state: this.state.bookObj}}><button> Add review </button>
                        </Link>

                        <RatingSelectForm book={this.state.bookObj}/>

                        <p> avg. rating {this.state.bookObj.volumeInfo.averageRating}</p>
                        
                    </div>
                : 
                    null
                }
            </div>
        )
    }

} 

export default BookDetails;