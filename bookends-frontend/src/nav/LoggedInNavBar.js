import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BookSearchFrom from "../forms/BookSearchForm";
import styled from "styled-components";
import {Button, Logo} from "../styles/styledElements";

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
                    <Link to="/"> <Button> Log Out </Button> </Link>
                </RightContainer>
            </NavBarContainer>
        )
    }
}

export default LoggedInNavBar