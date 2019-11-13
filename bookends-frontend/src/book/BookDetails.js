import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingSelectForm from "./RatingSelectForm";
import AddReadBook from "../buttons/AddReadBook";
import UsersBookReview from "../review/UsersBookReview";
import { PlayfairHeading, Button } from "../styles/styledElements";
import styled from "styled-components";

class BookDetails extends Component {

    state = {
        bookObj: null,
        showForm: false,
        reviews: [], 
        hasReviewed: false, 
        userReview: {},
        readMore: false
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

    renderBookDescription = () => this.setState({readMore: !this.state.readMore});

    render(){
        console.log(this.state.bookObj);
        const book = this.state.bookObj
        let bookDescription = this.state.bookObj ? book.volumeInfo.description : null;
        return (
            <PageContainer>
                {this.state.bookObj !== null 
                ?   
                    <div>
                        <DetailsContainer>
                            <LeftContainer>
                                <Image src={book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"/>
                                {
                                    !this.state.hasReviewed ? 
                                    <Link to={{
                                    pathname:`/book/${book.id}/reviews`,
                                    state: {
                                        bookObj: book,
                                        user: this.props.user
                                    }
                                    }}><AddReviewButton> Add review </AddReviewButton>
                                </Link>
                        
                            : 
                        
                                null
                            }

                        <RatingSelectForm book={book} user={this.props.user}/>
                        <p> avg. rating {book.volumeInfo.averageRating}</p>
                        <AddReadBook book={book} user={this.props.user}/>
                            </LeftContainer>


                            <RightContainer>
                                <PlayfairHeading>{book.volumeInfo.title}</PlayfairHeading>
                                <Author> By: {book.volumeInfo.authors[0]}</Author>
                                {!this.state.readMore?                         
                                    <section>{bookDescription.substring(0, 600)} <ReadMoreButton onClick={this.renderBookDescription}> ...more </ReadMoreButton></section>
                                    : 
                                    <section>{bookDescription} <ReadMoreButton onClick={this.renderBookDescription}>...less</ReadMoreButton></section>
                                }

                                <PlayfairHeading><u> Reviews for {book.volumeInfo.title} </u></PlayfairHeading>
                                {this.renderReviews()}
                            </RightContainer>
                            
                            {/* {this.state.userReview} */}
                        </DetailsContainer>
                            
                    </div>
                : 
                    null
                }
            </PageContainer>
        )
    }

} 

export default BookDetails;

const DetailsContainer = styled.div`
    display: flex;
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

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    padding-top: 25px;
    padding-left: 25px;
`

const Author = styled.h4`
    font-family: Playfair Display, serif;
    padding: 0; 
    margin-top: -20px;
`

const ReadMoreButton = styled.button`
    padding: 0; 
    font-size: 14px;
    background: none;
    border: 0;
    color: blue;

    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const AddReviewButton = styled(Button)`
    margin-top: 10px;

    :hover {
        color: white;
        background-color: lightseagreen;
    }
`