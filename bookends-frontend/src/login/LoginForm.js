import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/styledElements";
import validator from "email-validator";

class LoginForm extends Component {
    
    state = {
        email: "", 
        password: "",
    }

    submitHandler = async (event) => {
        event.preventDefault();
        try {

            const dataPresent = this.checkInput();
            console.log(dataPresent);
            if (!dataPresent) return;

            const data = {
                email: this.state.email,
                password: this.state.password
            }
            const url = "http://localhost:3000/users/login";
            this.props.loginUser(data);
            return fetch(url, {
                method: "POST", 
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(user => {
                console.log(user);
                if (user.message) {
                    console.log(user.message)
                } else {
                    this.props.loginUser(user);
                    this.props.history.push("/profile");
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target["name"]]: event.target.value
        })
    }

    checkInput = () => {
        const email = validator.validate(this.state.email);
        console.log(email);
        if (this.state.email === "" || this.state.password === "") {
            return false;
        } 
        if (!email) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <FormContainer>
                <Form onSubmit={this.submitHandler}>
                    <FormHeading> Log In </FormHeading>

                    <FormLabel htmlFor="email"> Email: </FormLabel> 
                    <FormInput name="email" type="text"  onChange={this.changeHandler} value={this.state.email} autoFocus/> 

                    <FormLabel htmlFor="password"> Password: </FormLabel> 
                    <FormInput name="password" type="password"  onChange={this.changeHandler} value={this.state.password} />

                    <ButtonContainer>
                        <FormButton> Log me in!  </FormButton>
                        <FormButton>Forgot Password?</FormButton>
                    </ButtonContainer>
                </Form>
            </FormContainer>
        )
    }
}

export default withRouter(LoginForm);

const FormContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Form = styled.form`
    width: 40%;
    height: 40%;
    background-color: antiquewhite;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    padding: 25px;
`

const FormInput = styled.input`
    padding: 5px;
    font-size: 14px;
    font-family: lato, sans-serif;
`

const FormLabel = styled.label`
    font-family: Playfair Display, serif;
    margin-top: 20px; 
`

const FormHeading = styled.h2`
    font-size: 2em;
    font-family: Playfair Display, serif;
    text-align: center;
`

const FormButton = styled(Button)`
    
    width: 33%;
    margin: 40px auto;

    :hover {
        background-color: rgb(2, 136, 194);
        color: white;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
