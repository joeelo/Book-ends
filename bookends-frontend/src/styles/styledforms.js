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

export {
    NoteForm,
    NoteHeadingInput, 
    NoteContentInput
}
