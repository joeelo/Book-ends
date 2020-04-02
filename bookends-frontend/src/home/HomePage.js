import React, { Component } from 'react'
import styled, { keyframes } from "styled-components";

class HomePage extends Component {

    render() {
        return (
            <Wrapper>
                {/* <Logo alt="My Reads logo" src="/images/myReadsLogo.png"/> */}
            </Wrapper>
        )
    }
}

export default HomePage 

const fadeIn = keyframes`
    0% { opacity: 0 }
    20% { opacity: .2 }
    40% { opacity: .4 }    
    60% { opacity: .6 }
    80% { opacity: .8 }
    100% { opacity: 1 }   
`
//give this duration time rather than percentages says steven;

const Wrapper = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
`

const Logo = styled.img`
    height: 600px;
    width: 600px;
    animation: ${fadeIn} 1s linear;
`