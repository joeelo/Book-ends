import React, { Component } from 'react'

export default class NewUserForm extends Component {

    state = {
        name: "",
        email: "", 
        password: ""
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log("working");
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <label htmlFor="name"> Name: </label><br/>
                    <input name="name" type="text"/><br/>
                    
                    <label htmlFor="email"> Email: </label> <br/>
                    <input name="email" type="text" /> <br/>

                    <label htmlFor="password"> Email: </label> <br/>
                    <input name="password" type="password" />

                    <button> submit </button>
                </form>
            </div>
        )
    }
}
