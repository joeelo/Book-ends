import React, { Component } from 'react'

export default class ReviewComment extends Component {

    state = {
        textValue: ""
    }

    changeHandler = (event) => {
        this.setState({
            textValue: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.textValue);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text-area" onChange={this.changeHandler}/>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}
