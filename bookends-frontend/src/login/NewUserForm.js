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

                    <label htmlFor="name"> Name: </label><br/>
                    <input name="name" type="text" onChange={this.changeHandler} value={this.state.name}/><br/>

                    <label htmlFor="username"> User Name: </label><br/>
                    <input name="username" type="text" onChange={this.changeHandler} value={this.state.username}/> <br/>
                    
                    <label htmlFor="email"> Email: </label> <br/>
                    <input name="email" type="text"  onChange={this.changeHandler} value={this.state.email}/> <br/>

                    <label htmlFor="password"> Password: </label> <br/>
                    <input name="password" type="password"  onChange={this.changeHandler} value={this.state.password}/>
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
    width: 100vw;
    height: 100vh;
    background-color: blue;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    width: 50%;
    height: 50%;
    background-color: antiquewhite;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`