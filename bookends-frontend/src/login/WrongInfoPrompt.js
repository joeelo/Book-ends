import React from 'react';
import styled, {keyframes} from "styled-components";
import { Button } from "../styles/styledElements";

const WrongInfoPrompt = (props) => {
    const clickHandler = () => {
        props.closePrompt();
        props.clearInputs();
    }
    return (
        <PromptModal>
            We do not have an email with that password combination
            <PromptButton onClick={clickHandler}> Try again </PromptButton>
        </PromptModal>
    )
}

export default WrongInfoPrompt;

const ScaleUp = keyframes`
    from {
        transform: scale(0.9);
    }

    to {
        transform: scale(1);
    }
`

const PromptModal = styled.div`
    position: absolute; 
    top: 50;
    left: 50;
    width: 50%;
    min-width: 350px;
    background-color: rgb(250, 230, 230);
    box-shadow: 0 10px 10px 2px grey;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${ScaleUp} .05s linear;

`

const PromptButton = styled(Button)`
    margin-top: 80px;
    
    :hover {
        background-color: teal;
        color: white;
    }
`
