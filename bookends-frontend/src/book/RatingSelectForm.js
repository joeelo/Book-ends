import React, { Component } from 'react'
import styled from "styled-components";

export default class RatingSelectForm extends Component {

    state = {
        user: {id: this.props.user.id},
        selectValue: 1
    }

    handleSelectChange = (event) => {
        this.setState({selectValue: event.target.value});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                user: this.state.user,
                rating: parseInt(this.state.selectValue),
                book: this.props.book
            }
            const url = "http://localhost:3000/rating"
            const config = {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            let response = await fetch(url, config);
            let json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <SelectForm value={this.state.selectValue} onChange={this.handleSelectChange}> 
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                        </SelectForm>
                        <button> submit </button>
                    </label>

                </form>
            </div>
        )
    }
}

const SelectForm = styled.select`
    height: 20px;
    width: 60px;
    margin-top: 20px;
`
