import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/styledElements";

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
                // this.props.history.push("/profile");
                if (user._id !== null) {

                }
                else {
                    this.props.loginUser({error: "cannot find user"});
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

    showPassword = () => this.setState({showPassword: !this.state.showPassword});

    render() {
        return (
            <FormContainer>
                <Form onSubmit={this.submitHandler}>
                    <FormHeading>Sign Up</FormHeading>

                    <FormLabel htmlFor="name"> Full Name: </FormLabel>
                    <FormInput name="name" type="text" onChange={this.changeHandler} placeholder="Full Name Here" value={this.state.name} autoFocus/><br/>

                    <FormLabel htmlFor="username"> User Name: </FormLabel>
                    <FormInput name="username" type="text" onChange={this.changeHandler} placeholder="Username Here" value={this.state.username}/> <br/>
                    
                    <FormLabel htmlFor="email"> Email: </FormLabel> 
                    <FormInput name="email" type="text"  onChange={this.changeHandler} placeholder="Email Here" value={this.state.email}/> <br/>

                    <FormLabel htmlFor="password"> Password: </FormLabel>
                    <FormInput name="password"  type={this.state.showPassword ? "text": "password"}  onChange={this.changeHandler} placeholder="Password Here" value={this.state.password}/>

                    <ShowPasswordContainer>

                    <PasswordCheckbox type="checkbox" onChange={this.showPassword}/><ShowPasswordLabel>Show password</ShowPasswordLabel> 
                    </ShowPasswordContainer>
                    <FormLabel htmlFor="confirmPassword"> Re-type Password: </FormLabel>
                    <FormInput name="confirmPassword" type={this.state.showPassword ? "text": "password"} onChange={this.changeHandler} placeholder="retype password" value={this.state.confirmPassword}/>
                    <br/>
                    <br/>

                    <Button> Sign me up!  </Button>
                </Form>
            </FormContainer>
        )
    }
}

export default withRouter(NewUserForm);

const FormContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
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
`

const FormHeading = styled.h2`
    font-size: 2em;
    font-family: Playfair Display, serif;
    text-align: center;
`

const ShowPasswordContainer = styled.div`
    display: flex;
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