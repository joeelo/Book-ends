import React, { Component } from 'react'

export default class RatingSelectForm extends Component {

    state = {
        user: {id: "5d2924256ea7922d902f02f6"},
        selectValue: ""
    }

    handleSelectChange = (event) => {
        this.setState({selectValue: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                user: this.state.user,
                rating: this.state.selectValue,
                bookId: this.props.book.id
            }
            console.log("posted");
            return fetch("http://localhost:3000/rating", {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={this.state.selectValue} onChange={this.handleSelectChange}> 
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                        </select>
                        <button> submit </button>
                    </label>

                </form>
            </div>
        )
    }
}
