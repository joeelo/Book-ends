import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import UsersBook from "./UsersBook";
import styled from "styled-components";
import { Container } from "../styles/styledElements";
import randomColorGenerator from "../styles/randomColorGenerator";
import { Button } from "../styles/styledElements";

class ProfileInfo extends Component {

    state = {
        books: null,
        backgroundColor: ``
    }

    componentDidMount() {
        const randomColor = randomColorGenerator();
        this.fetchAllUserBooks();
        this.setState({backgroundColor: randomColor});
        this.checkUser();

    }

    checkUser = () => {
        if (this.props.user.id === "" || this.props.user.id === null) {
            this.props.history.push("/");
            console.log("cannot access page without a user")
        }
    }

    fetchAllUserBooks = async () => {
        try {
            const url = `http://localhost:3000/user/show/${this.props.user.id}`;
            const response = await fetch(url);
            const json = await response.json();   
            this.setState({
                books: json
            })  
        } catch (error) {
            console.log(error);
        }
    }

    renderUsersBookList = () => {
        const booksArray = this.state.books.books.map((book, index) => {
           return <UsersBook key={index} book={book}/>
        })
        return booksArray;
    }

    render() {
        const style = {
            backgroundColor: this.state.backgroundColor
        }

        return (
            <ProfileContainer>
                <Header style={style}>
                    <BaseLineH1> Your Profile </BaseLineH1>
                </Header>

                <FlexContainer>
                    <ContentContainer>
                        <BorderCircle style={{border: `3px solid ${this.state.backgroundColor}`}}>
                            <Image src="https://miro.medium.com/fit/c/256/256/2*YV7osFJW-MqQ4cqDsBIRPQ.jpeg"/>
                        </BorderCircle>
                        <h3>Name: {this.props.user.name}</h3>
                        <h3>username: {this.props.user.username}</h3>
                        <h3>email: {this.props.user.email}</h3>
                        <h3>Password: *********</h3>
                        <Link to="/profile/edit"> <EditProfileButton> edit my info </EditProfileButton> </Link>

                        <Link to={{
                            pathname: "/profile/change-password", 
                            state: {user: this.props.user}
                        }}> <Button> change password </Button></Link> 
                    </ContentContainer>
                    
                    <ContentContainer>
                        <MyBooksHeading>My Books</MyBooksHeading>
                        <BookContainer>
                            {this.state.books ? this.renderUsersBookList() : null}
                        </BookContainer>

                    </ContentContainer>

                </FlexContainer>
            </ProfileContainer>
        )
    }
}

export default withRouter(ProfileInfo);

const ProfileContainer = styled(Container)`
    width: 100vw;
    padding: 0;
    font-family: Playfair Display, serif;
    font-weight: 300;
`

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    width: 100%;
    height: 150px;
    align-items: baseline;
    justify-content: baseline;
    margin-bottom: 30px;
`

const BaseLineH1 = styled.h1`
    align-self: flex-end;
    margin: 0 0 0 10%;
    font-family: Playfair Display, serif;
    font-size: 48px;
`

const FlexContainer = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`

const ContentContainer = styled.div`
    width: 50%;
    min-width: 300px;
    flex-wrap: wrap
`

const BookContainer = styled.div`
    width: 50%;
    min-width: 300px;
    display: flex;
    flex-wrap: wrap;
    padding: 0; 
    margin: 0;
`

const Image = styled.img`
    border-radius: 50%;
    position: relative;
    top: 10px; 
    left: 10px;
    width: 200px;
    height: 200px;
`

const BorderCircle = styled.div`
    height: 220px;
    width: 220px;
    border-radius: 50%;
`

const MyBooksHeading = styled.h2`
    padding: 0;
    margin: 0;
`

const EditProfileButton = styled(Button)`
    :hover {
        background-color: teal;
    }
`