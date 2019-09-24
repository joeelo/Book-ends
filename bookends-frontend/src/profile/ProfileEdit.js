import React, { Component } from 'react'
import { withRouter } from "react-router-dom"



class ProfileEdit extends Component {

    state = {
        name: this.props.user.name, 
        username: this.props.user.username, 
        email: this.props.user.email,
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

    render() {
        const user = this.props.user
        return (
            <div>

                <h1> Update profile info </h1>

                <form onSubmit={this.submitHandler}>
                    <label htmlFor="name"> Full Name: </label><br/>
                    <input name="name" type="text" onChange={this.changeHandler} value={this.state.name}/><br/>

                    <label htmlFor="username"> User Name: </label><br/>
                    <input name="username" type="text" onChange={this.changeHandler} value={this.state.username}/> <br/>
                    
                    <label htmlFor="email"> Email: </label> <br/>
                    <input name="email" type="text"  onChange={this.changeHandler} value={this.state.email}/> <br/>
                    <button> submit </button>
                </form>
            </div>
        )
    }
}

export default withRouter(ProfileEdit);