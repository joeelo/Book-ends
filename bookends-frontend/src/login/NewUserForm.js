import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

export default class NewUserForm extends Component {

    state = {
        name: "",
        email: "", 
        password: ""
    }

    submitHandler = async (event) => {
        event.preventDefault();
        try {
            const data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            const url = "http://localhost:3000/users"
            fetch(url, {
                method: "POST", 
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(user => {
                if (user._id !== null) {
                    this.props.loginUser(user);
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
            <div>
                <form onSubmit={this.submitHandler}>

                    <label htmlFor="name"> Name: </label><br/>
                    <input name="name" type="text" onChange={this.changeHandler} value={this.state.name}/><br/>
                    
                    <label htmlFor="email"> Email: </label> <br/>
                    <input name="email" type="text"  onChange={this.changeHandler} value={this.state.email}/> <br/>

                    <label htmlFor="password"> Password: </label> <br/>
                    <input name="password" type="password"  onChange={this.changeHandler} value={this.state.password}/>
                    <br/>
                    <br/>

                    <button> submit </button>
                </form>
            </div>
        )
    }
}
