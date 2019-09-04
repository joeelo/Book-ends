import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Logo } from "../styles/styledElements";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
`

const RightContainer = styled.div`
    display: flex;
    justify-content: flex-start;

`

const LeftContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

class NotLoggedInNavBar extends Component {
    render() {

        const user = this.props.user;
        console.log(user);
        return (
            <Wrapper>
                <LeftContainer>
                    <Logo alt="My Reads logo" src="/images/myReadsLogo.png"/>
                </LeftContainer>

                <RightContainer>
                    <Link to="/sign-up"> <Button> Sign Up </Button></Link>
                    <Link to="/login"> <Button> Login </Button></Link>

                </RightContainer>
            </Wrapper>
        )
    }
}

export default NotLoggedInNavBar