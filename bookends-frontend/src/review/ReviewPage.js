import React, { Component } from 'react';
import BookThumbnail from '../book/BookThumbnail';
import styled from "styled-components";
import { Button } from "../styles/styledElements";

export default class ReviewPage extends Component {

    state = {
        reviewTitle: "",
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
                const data = {
                    user: this.props.location.state.user,
                    title: this.state.reviewTitle,
                    content: this.state.textValue,
                    book: this.props.location.state.bookObj
                }
                const url = `http://localhost:3000/book/${this.props.location.state.bookObj.id}/reviews`;
                const config =  {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
                const response = await fetch(url, config);
                const json = await response.json();
                await this.props.history.push(`/book/${this.props.location.state.bookObj.id}`)
                return json;
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const book = this.props.location.state.bookObj;

        return ( 
            this.props.location.state.bookObj

            ? 
                <div>
                    <BookThumbnail book={book} fromReview/>
                    
                    <FormContainer>
                        <Form onSubmit={this.postHandler}>

                            <FormLabel htmlFor="reviewTitle"> Title Your Review </FormLabel>
                            <FormInput 
                                type="text" 
                                name="reviewTitle" 
                                autoFocus={true}
                                value={this.state.reviewTitle} 
                                onChange={this.changeHandler}
                            />
                            <TextArea 
                                name="textValue" 
                                value={this.state.textValue} 
                                placeholder="Write your review here" 
                                onChange={this.changeHandler}
                            />
                            <ReviewButton> Post </ReviewButton>
                        </Form>
                    </FormContainer>
                </div> 

            :

            null
        )
    }
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const FormHeading = styled.h2`

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 400px;
    justify-content: space-around;
`

const FormLabel = styled.label`
    font-size: 2em;
    font-family: "Playfair Display", serif;
`

const FormInput = styled.input`
    padding: 10px 5px;
    font-size: 14px; 
    font-family: "Lato", sans-serif; 
    border: 2px solid teal;
    transition: .5s ease-in-out;

    :focus {
        outline: none;
        border: 2px solid #FF7561;
    }

`

const ReviewButton = styled(Button)`
    width: 100px;
    margin: 0 auto;

`

const TextArea = styled.textarea`
    min-height: 200px;
    border: 2px solid teal;
    transition: .5s ease-in-out;
    font-size: 14px;
    font-family: "Lato", sans-serif;
    padding: 10px 5px;

    :focus {
        outline: none;
        border: 2px solid #FF7561;
    }
`
