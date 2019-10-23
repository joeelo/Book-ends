import styled from "styled-components";

const NoteForm = styled.form`
    width: 100%;
    background-color: inherit; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NoteHeadingInput = styled.input`
    background-color: white;
    width: 90%;
    padding: 15px;
    font-family: Playfair Display, serif; 
    margin-top: 20px;
    font-weight: 400;
    font-size: 32px;
`

const NoteContentInput = styled.textarea`
    Background-color: white;
    width: 90%;
    padding: 10px 15px;
    min-height: 400px;
    margin-top: 20px;
    overflow-y: scroll;
    font-size: 16px;
    font-family: Lato, sans-serif;
`

const FormContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    width: 40%;
    height: 40%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    padding: 25px;
    max-width: 400px;
`

const FormInput = styled.input`
    padding: 10px 5px;
    font-size: 14px;
    font-family: lato, sans-serif;
    border: 0px;
    border-bottom: 2px solid teal;
    transition: .5s ease-in-out;
    margin-top: 30px;
    font-size: 16px;

    :focus {
        outline: none;
        border-bottom: 2px solid #FF7561;
    }
`

const FormHeading = styled.h2`
    font-size: 2em;
    font-family: Playfair Display, serif;
    text-align: center;
`

export {
    NoteForm,
    NoteHeadingInput, 
    NoteContentInput, 
    FormContainer, 
    Form, 
    FormHeading,
    FormInput
}
