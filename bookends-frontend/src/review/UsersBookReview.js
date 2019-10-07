import React, { Component } from 'react';
import styled from "styled-components";
import randomColorGenerator from "../styles/randomColorGenerator";

class UsersBookReview extends Component {

    state = {
        renderCommentBox: false,
        backgroundColor: "#000"
    }    

    componentDidMount() {
        const color = randomColorGenerator();
        this.setState({backgroundColor: color});
    }

    renderComment = () => {
        this.setState({
            renderCommentBox: !this.state.renderCommentBox
        })
    }

    render() {
        const divStyles = {
            backgroundColor: this.state.backgroundColor
        }

        const { review, user } = this.props
        console.log(this.props)
        return (
            <CommentContainer style={divStyles}>
                <Title>{review.title} </Title>
                <Content>{review.content} </Content> 
                <UserInfo>Posted By: {user.username}</UserInfo>

            </CommentContainer>
        )
    }
}

export default UsersBookReview;

const CommentContainer = styled.div`    
    width: 100%; 
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
`

const Title = styled.h2`
    font-family: Playfair Display, serif; 
    background-color: white;
    padding-left: 5px;
`

const Content = styled.p`
    font-family: Lato, sans-serif;
    background-color: white;
    padding: 0 5px 0 5px;
`

const UserInfo = styled.p`
    font-size: 12px;
    font-family: Lato, sans-serif;
`
