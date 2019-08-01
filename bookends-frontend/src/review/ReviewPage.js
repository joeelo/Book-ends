import React, { Component } from 'react'

export default class ReviewPage extends Component {

    state = {
        user: {email: "josephClorenzo@gmail.com"},
        bookObj: this.props.location.state, 
        textValue: ""
    }

    changeHandler = (event) => {
        this.setState({
            textValue: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form>
                    <textarea value={this.state.textValue} onChange={this.changeHandler}/>
                    <button> Post </button>
                </form>
            </div>
        )
    }
}
