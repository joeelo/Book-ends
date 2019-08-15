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

    postComment = async () => {
        try {
            const data = {
                content: this.state.textValue
            }

            const url = ``
            const config = {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(data)
            }


        } catch (error) {
            
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.renderComment();
        console.log(this.state.textValue);
    }

    render() {
        console.log(this.props);
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
