import React, { Component } from 'react';
import styled from "styled-components";

const FullPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: rgba(0, 0, 0, .2);
`

const Prompt = styled.div`
    position: fixed;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
    background-color: rgba(210, 255, 210);
    z-index: 3;
    width: 40vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    padding: 20px;
    text-align: center;
`

const Header = styled.h2`
    font-family: Playfair Display, serif;
`

const Details = styled.p`
    font-size: 12px;
`

const Button = styled.button`
    padding: 10px 20px;
    transition: .5s ease-in-out all;
    background-color: white;
    border: 1px solid black;
    margin: 0 10px;
`

const CloseButton = styled(Button)`
    transition: .5s ease all;

    :hover {
        background-color: rgb(210, 255, 210);
    }
` 

const DeleteButton = styled(Button)`
    transition: .5s ease all; 
    padding: 10px 10px;

    :hover {
        background-color: rgba(255, 100, 100, .7);
    }
`


const ButtonContainer = styled.div`
    margin-top: 20px;
`

class NoteDeletePrompt extends Component {

    deleteHandler = async () => {
        console.log(this.props);
    }

    wrapperEscape = (event) => {
        if (event.target.id === "wrapper") {
            this.props.closePrompt();
        }
    }

    render() {
        return (
            <FullPageWrapper id="wrapper" onClick={this.wrapperEscape}>
                <Prompt>

                    <Header> Are you sure you want to delete this note?</Header> 
                    <Details> Once the note is gone, it's gone forever </Details>

                    <ButtonContainer>
                        <CloseButton onClick={this.props.closePrompt}> Nope </CloseButton>
                        <DeleteButton onClick={this.deleteHandler}> Yes, I'm sure </DeleteButton>
                    </ButtonContainer>           
                </Prompt>
            </FullPageWrapper>
        )   
    }
}

export default NoteDeletePrompt
