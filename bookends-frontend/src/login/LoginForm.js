import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/styledElements"

class LoginForm extends Component {
    
    state = {
        name: "",
        email: "", 
        password: "",
        reRender: false
    }

    submitHandler = async (event) => {
        event.preventDefault();
        try {
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            const url = "http://localhost:3000/users/login";
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
                console.log(user);
                if (user.message) {
                    console.log(user.message)
                } else {
                    this.props.loginUser(user);
                    this.props.history.push("/profile");
                }
                // if (user._id !== null) {

                // }
                // else {
                //     this.props.loginUser({error: "cannot find user"});
                // }
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
                    <FormHeading> Log In </FormHeading>

                    <FormLabel htmlFor="email"> Email: </FormLabel> <br/>
                    <FormInput name="email" type="text"  onChange={this.changeHandler} value={this.state.email} autoFocus/> <br/>

                    <FormLabel htmlFor="password"> Password: </FormLabel> <br/>
                    <FormInput name="password" type="password"  onChange={this.changeHandler} value={this.state.password} />
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <FormButton> Log me in!  </FormButton>
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

const FormButton = styled(Button)`
    
    width: 33%;
    margin: 0 auto;

    :hover {
        background-color: teal;
        color: white;
    }
`
