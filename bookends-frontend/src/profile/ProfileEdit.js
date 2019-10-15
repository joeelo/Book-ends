import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";

class ProfileEdit extends Component {

    state = {
        name: this.props.user.name, 
        username: this.props.user.username, 
        email: this.props.user.email,
    }
    
    componentDidMount() {
        this.checkUser();
    }

    submitHandler = async (event) => {
        event.preventDefault();
        try {

            const data = {
                user: this.state
            };
            const url = `http://localhost:3000/user/profile/edit`;
            const config = {
                method: "PATCH", 
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(data)
            }
            const response = await fetch(url, config);
            const json = await response.json();
            this.props.updateUser(this.state)
            // console.log(json);
            this.props.history.push("/profile");
        } catch (error) {
            console.log(error);
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    checkUser = () => {
        if (this.props.user.id === "" || this.props.user.id === null) {
            this.props.history.push("/");
            console.log("cannot access page without a user")
        }
    }

    render() {
        return (
            <div>

                <FormHeading> Update profile info </FormHeading>
                <FormContainer>


                    <Form onSubmit={this.submitHandler}>
                        <FormLabel htmlFor="name"> Edit name  </FormLabel><br/>
                        <FormInput name="name" type="text" onChange={this.changeHandler} placeholder={this.props.user.name} value={this.state.name}/><br/>

                        <FormLabel htmlFor="username"> Edit username </FormLabel><br/>
                        <FormInput name="username" type="text" onChange={this.changeHandler} value={this.state.username}/> <br/>
                        
                        <FormLabel htmlFor="email"> Edit Email </FormLabel> <br/>
                        <FormInput name="email" type="text"  onChange={this.changeHandler} value={this.state.email}/> <br/>
                        <button> submit </button>
                    </Form>
                </FormContainer>
            </div>
        )
    }
}

export default withRouter(ProfileEdit);

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
    max-width: 400px;
`

const FormInput = styled.input`
    padding: 5px;
    font-size: 14px;
    font-family: lato, sans-serif;
`

const FormLabel = styled.label`
    font-family: Playfair Display, serif;
    margin: 0;
`

const FormHeading = styled.h2`
    font-size: 2em;
    font-family: Playfair Display, serif;
    text-align: center;
`