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
        reRender: false
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
                this.props.loginUser(data);
                this.props.history.push("/profile");
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

    render() {
        return (
            <FormContainer>
                <Form onSubmit={this.submitHandler}>
                    <h1>Sign up Form</h1>

                    <FormLabel htmlFor="name"> Name: </FormLabel>
                    <FormInput name="name" type="text" onChange={this.changeHandler} value={this.state.name} autoFocus="true"/><br/>

                    <FormLabel htmlFor="username"> User Name: </FormLabel>
                    <FormInput name="username" type="text" onChange={this.changeHandler} value={this.state.username}/> <br/>
                    
                    <FormLabel htmlFor="email"> Email: </FormLabel> 
                    <FormInput name="email" type="text"  onChange={this.changeHandler} value={this.state.email}/> <br/>

                    <FormLabel htmlFor="password"> Password: </FormLabel>
                    <FormInput name="password" type="password"  onChange={this.changeHandler} value={this.state.password}/>
                    <br/>
                    <br/>

                    <Button> Sign me up!  </Button>
                </Form>
            </FormContainer>
        )
    }
}

export default withRouter(NewUserForm);

const Input = styled.input`

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
    background-color: antiquewhite;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    padding: 50px;
`

const FormInput = styled.input`
    padding: 10px;
    font-size: 16px;
    font-family: lato, sans-serif;
`

const FormLabel = styled.label`
    font-family: Playfair Display, serif;
    font-size: 1.2em;
`