import React, { Component } from 'react'
import { withRouter } from "react-router-dom"



class ProfileEdit extends Component {

    state = {
        name: this.props.location.state.user.name, 
        username: this.props.location.state.user.username, 
        email: this.props.location.state.user.email,
        password: this.props.location.state.user.password
    }
    
    submitHandler = async () => {
        try {
            const user = this.props.location.state.user;
            console.log(user);
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
        const user = this.props.location.state.user
        console.log(user);
        return (
            <div>

                <h1> Update profile info </h1>

                <form>
                    <label htmlFor="name"> Name: </label><br/>
                    <input name="name" type="text" onChange={this.changeHandler} value={this.state.name}/><br/>

                    <label htmlFor="username"> User Name: </label><br/>
                    <input name="username" type="text" onChange={this.changeHandler} value={this.state.name}/> <br/>
                    
                    <label htmlFor="email"> Email: </label> <br/>
                    <input name="email" type="text"  onChange={this.changeHandler} value={this.state.email}/> <br/>

                </form>
            </div>
        )
    }
}

export default withRouter(ProfileEdit);