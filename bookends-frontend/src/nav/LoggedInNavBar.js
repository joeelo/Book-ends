import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BookSearchFrom from "../book/BookSearchForm";
import styled from "styled-components";

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
`

const LeftContainer = styled.div`
    display: flex;
    justify-content: space-around;
    justify-self: flex-start;
    height: 70px;
    align-items: center;
`

const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end; 
    justify-self: flex-end;
    height: 70px;
    align-items: center;
`

const Button = styled.button`
    border: 1px solid black;
    padding: 5px 10px;
`

const MarginButton = styled.button`
    border: 1px solid black;
    padding: 5px 10px;
    margin-right: 10px;
`

const Logo = styled.img`
    height: 140px;
    margin-top: 10px;
`

class LoggedInNavBar extends Component {
    render() {

        const user = this.props.user;
        return (
            <NavBarContainer>
                <LeftContainer>
                    <Logo alt="My Reads logo" src="/images/myReadsLogo.png"/>
                    <Link to="/profile" > <Button> Profile </Button> </Link>
                    <Link to={`/notes/${user.userName}`}> <Button> My notes </Button> </Link>
                </LeftContainer>
                <RightContainer>
                    <BookSearchFrom updateSearchTerm={this.props.updateSearchTerm}/>
                    <Link to="/"> <MarginButton> Log Out </MarginButton> </Link>
                </RightContainer>
            </NavBarContainer>
        )
    }
}

export default LoggedInNavBar