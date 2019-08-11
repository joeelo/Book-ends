import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingSelectForm from "./RatingSelectForm";
import AddReadBook from "../buttons/AddReadBook"

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
            const bookId = this.props.props.location.pathname.replace("/book/", "")
            const data = {
                user: this.props.user,
                book: bookId
            }
            const url = `http://localhost:3000/book/id/${bookId}`
            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(data)
            }
            const response = await fetch(url, config);
            const json = await response.json();
            this.setState({
                bookObj: json
            })
        } catch (error) {
            console.log("error", error)
        }
    }



    render(){
        console.log(this.props);
        return (
            <div>
                {this.state.bookObj !== null 
                ?   
                    <div>
                        <h2>{this.state.bookObj.volumeInfo.title}</h2>
                        <Link to={{
                            pathname:`/book/${this.state.bookObj.id}/review`,
                            state: {
                                bookObj: this.state.bookObj,
                                user: this.props.user
                            }
                            }}><button> Add review </button>
                        </Link>

                        <RatingSelectForm book={this.state.bookObj} user={this.props.user}/>

                        <p> avg. rating {this.state.bookObj.volumeInfo.averageRating}</p>
                        <AddReadBook book={this.state.bookObj} user={this.props.user}/>
                    </div>
                : 
                    null
                }
            </div>
        )
    }

} 

export default BookDetails;