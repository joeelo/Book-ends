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

export {
    HeaderButton, 
    Button,
    Logo
}