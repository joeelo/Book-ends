import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/styledElements"
import { FormContainer, Form, FormInput, FormHeading } from "../styles/styledforms";

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
            this.props.history.push("/profile");
            return json;
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

                <FormContainer>
                    <Form onSubmit={this.submitHandler}>
                        <FormHeading> Update profile info </FormHeading>

                        <FormInput 
                            name="name" 
                            type="text" 
                            onChange={this.changeHandler} 
                            placeholder={this.props.user.name} 
                            value={this.state.name}
                        />

                        <FormInput 
                            name="username" 
                            type="text" 
                            onChange={this.changeHandler} 
                            value={this.state.username}
                        />
                        
                        <FormInput 
                            name="email" 
                            type="text"  
                            onChange={this.changeHandler} 
                            value={this.state.email}
                        /> 
                        <EditSubmit> Done editing! </EditSubmit>
                    </Form>
                </FormContainer>
            </div>
        )
    }
}

export default withRouter(ProfileEdit);

const EditSubmit = styled(Button)`
    width: 33%;
    margin: 50px auto 0 auto;

    :hover {
        color: white;
        background-color: rgb(0, 133, 255);
    }

`