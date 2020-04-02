import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const BookSearchForm = (props) => {

	const [ title, setTitle ] = useState("");
	const [ books, setBooks ] = useState([]);

	

	const handleSubmit = (event) => {
		event.preventDefault();
		props.updateSearchTerm(this.state.title);
		props.history.push("/books/view");
	}

	return (
		<div>
			<FormContainer onSubmit={handleSubmit} autoComplete="off"> 
				<MagButton> 
					{/* <MagnifyingGlassImg alt="magnifying glass icon" src="/images/magnifyingGlass.png"/>  */}
				</MagButton>
				<SearchBar 
						name="title" v
						alue={title} 
						onChange={(event) => setTitle(event.target.value)} 
						placeholder="search for your book"
				/>
			</FormContainer>
		</div>
	)
}


export default withRouter(BookSearchForm);

const FormContainer = styled.form`
	margin: 0 auto;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	margin-right: 10px;
`

const SearchBar = styled.input`
	padding: 10px 0;
	width: 250px;
	background: transparent;
	border: none;
	border-bottom: 2px solid teal;
	font-size: 16px;
	font-family: Lato, sans-serif;
	transition: .5s ease-in-out;

	@media screen and (min-width: 769px) {
		margin-top: 10px;
	}

	:focus {
			outline: none;
			border-bottom: 2px solid #FF7561;
	}

	:hover {
			border-bottom: 2px solid #FF7561;
	}
`

const MagButton = styled.button`
	border: 0;
	padding: 0;
	margin-top: 30px;
`

const MagnifyingGlassImg = styled.img`
	height: 25px;
	width: 25px;
	margin-left: 5px;
	background-color: inherit;
	cursor: pointer;
`