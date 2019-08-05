import React, { Component } from "react"
import { Link } from "react-router-dom"

class BookDetails extends Component {

    state = {
        bookObj: null,
        showForm: false,
        selectValue: ""
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

    handleSelectChange = (event) => {
        this.setState({selectValue: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(this.state.selectValue);
        } catch (error) {
            console.log(error);
        }

    }

    render(){
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
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <select value={this.state.selectValue} onChange={this.handleSelectChange}> 
                                    <option value="1"> 1 </option>
                                    <option value="2"> 2 </option>
                                    <option value="3"> 3 </option>
                                    <option value="4"> 4 </option>
                                    <option value="5"> 5 </option>
                                </select>
                                <button> submit </button>
                            </label>

                        </form>
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