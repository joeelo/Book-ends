import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingSelectForm from "./RatingSelectForm";
import AddReadBook from "../buttons/AddReadBook";
import UsersBookReview from "../review/UsersBookReview";
import { PlayfairHeading } from "../styles/styledElements";
import styled from "styled-components";

class BookDetails extends Component {

    state = {
        bookObj: null,
        showForm: false,
        reviews: [], 
        hasReviewed: false, 
        userReview: {}
    }
    
    componentDidMount() {
        this.fetchBookById();
    }   

    componentDidUpdate(prevProps, prevState) {
        if (this.state.hasReviewed === false) {
            this.hasUsersBookReviewed();
        }
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
                bookObj: json.data,
                reviews: json.reviews.reviews
            })
        } catch (error) {
            console.log("error", error)
        }
    }

    hasUsersBookReviewed = () => {   
        if (this.state.reviews !== undefined) {
            return this.state.reviews.forEach(review => {
                if (review.user === this.props.user.id) {
                    this.setState({hasReviewed: true});
                    this.setState({userReview: review});
                }
            })
        } 
    }

    renderReviews = () => {
        if (this.state.reviews !== undefined) {
            const reviewDivs = this.state.reviews.map(review => {
                return <UsersBookReview key={review._id} review={review} user={this.props.user}/>
            })
            return reviewDivs;
        }
    }

    render(){
        console.log(this.state.bookObj);
        return (
            <PageContainer>
                {this.state.bookObj !== null 
                ?   
                    <div>
                        <ReviewContainer>
                            <PlayfairHeading>{this.state.bookObj.volumeInfo.title}</PlayfairHeading>
                            <Image src={this.state.bookObj.volumeInfo.imageLinks.smallThumbnail} alt="book cover"/>
                            {/* {this.state.userReview} */}
                        </ReviewContainer>
                            {
                                !this.state.hasReviewed ? 
                                <Link to={{
                                    pathname:`/book/${this.state.bookObj.id}/reviews`,
                                    state: {
                                        bookObj: this.state.bookObj,
                                        user: this.props.user
                                    }
                                    }}><button> Add review </button>
                                </Link>
                        
                            : 
                        
                                <div>
                                    "you've already reviewed this book!"
                                </div>
                            }

                        <RatingSelectForm book={this.state.bookObj} user={this.props.user}/>

                        <p> avg. rating {this.state.bookObj.volumeInfo.averageRating}</p>
                        <AddReadBook book={this.state.bookObj} user={this.props.user}/>
                        {this.renderReviews()}
                    </div>
                : 
                    null
                }
            </PageContainer>
        )
    }

} 

export default BookDetails;

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Image = styled.img`
    width: 150px;
    height: 227px;
`

const PageContainer = styled.div`
    display: flex;
    width: 80vw;
    margin: 0 auto;
    flex-direction: column;
`