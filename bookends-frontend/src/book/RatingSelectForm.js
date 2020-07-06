import React, { useState, useContext } from 'react'
import styled from "styled-components";
import { UserContext } from '../context/UserContext';

const RatingSelectForm = (props) => {

	const [ selectValue, setSelectValue ] = useState(1);
	const { user } = useContext(UserContext);


	const handleSelectChange = (event) => {
		setSelectValue(event.target.value);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = {
				user: user,
				rating: parseInt(selectValue),
				book: props.book
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

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					<SelectForm value={selectValue} onChange={handleSelectChange}> 
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

export default RatingSelectForm; 

RatingSelectForm.defaultProps = {
	book: {}
};

const SelectForm = styled.select`
	height: 20px;
	width: 60px;
	margin-top: 20px;
`
