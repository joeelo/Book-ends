import styled from "styled-components";

const HeaderButton = styled.button`
    padding: 0;
    margin: 5px 15px;
    border: none;
    background: none;
    font-family: lato, sans-serif;
    font-size: 14px;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

    :focus {
        outline: 0;
    }
`

const Logo = styled.img`
    height: 140px;
    margin-top: 10px;
`

const Button = styled.button`
    padding: 10px 15px;
    transition: .5s ease-in-out all;
    background-color: white;
    border: 1px solid black;
`

const NoteContainer = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
`

export {
    HeaderButton, 
    Button,
    Logo, 
    NoteContainer
}