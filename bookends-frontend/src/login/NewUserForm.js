import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/styledElements";
import { FormContainer, Form, FormInput, FormHeading } from "../styles/styledforms";
import validator from "email-validator";

class NewUserForm extends Component {
    
    state = {
        name: "",
        username: "",
        email: "", 
        password: "",
        confirmPassword: "",
        reRender: false, 
        showPassword: false
    }

    submitHandler = async (event) => {
        event.preventDefault();
        try {
            const isValidInfo = this.validateEmail();
            if (!isValidInfo) {
                return false
            }
            const data = {
                name: this.state.name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }
            const url = "http://localhost:3000/users/sign-up";
            this.setState({reRender: true})
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
                this.props.loginUser(user);
                this.props.history.push("/profile");
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

    validateEmail = () => {
        const isValid = validator.validate(this.state.email);
        if (!isValid) return false;

        return true
    }

    showPassword = () => this.setState({showPassword: !this.state.showPassword});

    render() {
        return (
            <FormContainer>
                <Form onSubmit={this.submitHandler}>
                    <FormHeading>Sign Up</FormHeading>
                    <FormInput 
                        name="name" 
                        type="text" 
                        onChange={this.changeHandler} 
                        placeholder="Full Name Here" 
                        value={this.state.name} 
                        autoFocus={true}
                    />
                    <FormInput 
                        name="username" 
                        type="text" 
                        onChange={this.changeHandler}
                        placeholder="Username Here" 
                        value={this.state.username}
                    />
                    <FormInput 
                        name="email" type="text"  
                        onChange={this.changeHandler} 
                        placeholder="Email Here" 
                        value={this.state.email}
                    />
                    <FormInput 
                        name="password"  
                        type={this.state.showPassword ? "text": "password"}  
                        onChange={this.changeHandler} placeholder="Password Here" 
                        value={this.state.password}
                    />

                    <ShowPasswordContainer>
                        <PasswordCheckbox 
                            type="checkbox" 
                            onChange={this.showPassword}
                        />
                        <ShowPasswordLabel>Show password</ShowPasswordLabel> 
                    </ShowPasswordContainer>
                    <RetypePasswordInput 
                        name="confirmPassword" 
                        type={this.state.showPassword ? "text": "password"} 
                        onChange={this.changeHandler} placeholder="retype password" 
                        value={this.state.confirmPassword}
                    />
                
                

                    <NewUserButton> Sign me up!  </NewUserButton>
                </Form>
            </FormContainer>
        )
    }
}

export default withRouter(NewUserForm);

const ShowPasswordContainer = styled.div`
    display: flex;
    padding-top: 5px;
`

const ShowPasswordLabel = styled.label`
    padding: 0;
    margin: 0;
    display: inline-block;
    font-size: 12px;
    margin-bottom: 4px;
`

const PasswordCheckbox = styled.input`
    display: inline-block;
`

const NewUserButton = styled(Button)`
    margin: 30px auto 0 auto;
    width: 30%;

    :hover {
        background-color: teal;
        color: white;
    }
`

const RetypePasswordInput = styled(FormInput)`
    margin-top: 15px;
`