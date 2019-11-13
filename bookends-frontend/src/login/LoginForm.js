import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/styledElements";
import { FormContainer, Form, FormInput, FormHeading } from "../styles/styledforms";
import validator from "email-validator";
import WrongInfoPrompt from "./WrongInfoPrompt";

class LoginForm extends Component {
    
    state = {
        email: "", 
        password: "",
        showPrompt: false
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
                if (user.message === "wrong login info try again") {
                    this.setState({showPrompt: true});
                    return;
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

    closePrompt = () => this.setState({showPrompt: false});
    clearInputs = () => this.setState({email: "", password: ""});

    render() {
        return (
            <FormContainer>
                { 
                        this.state.showPrompt 
                    ? 
                        <WrongInfoPrompt 
                            closePrompt={this.closePrompt} 
                            clearInputs={this.clearInputs}
                        /> 
                    : 
                        null 
                }
                <Form onSubmit={this.submitHandler}>
                    <FormHeading> Log In </FormHeading>

                    <FormInput 
                        name="email" 
                        type="text"  
                        onChange={this.changeHandler} 
                        value={this.state.email} 
                        autoFocus={true}
                        placeholder="Email"
                    /> 

                    <FormInput 
                        name="password" 
                        type="password"  
                        onChange={this.changeHandler} 
                        value={this.state.password}
                        placeholder="Password"
                    />

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

const FormButton = styled(Button)`
    
    width: 33%;
    margin: 40px auto;

    :hover {
        background-color: teal;
        color: white;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
