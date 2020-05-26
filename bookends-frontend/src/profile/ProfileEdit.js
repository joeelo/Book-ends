import React, { useContext, useState } from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/styledElements"
import { FormContainer, Form, FormInput, FormHeading } from "../styles/styledforms";
import { UserContext } from '../context/UserContext';

const ProfileEdit = (props) => {

	const {user, updateUser} = useContext(UserContext);
	const [ name, setName ] = useState("");
	const [ username, setUsername] = useState("");
	const [ email, setEmail ] = useState("");

	const submitHandler = async (event) => {
		event.preventDefault();
		try {
			const data = {
				user: {
					name, 
					username, 
					email
				}
			};
			const url = `http://localhost:3000/user/profile/edit`;
			const config = {
				method: "PATCH", 
				mode: "cors",
				headers: {
						"Content-Type": "application/json"
				}, 
				body: JSON.stringify(data)
			}
			const response = await fetch(url, config);
			const json = await response.json();
			updateUser({name, username, email});
			props.history.push("/profile");
			return json;
		} catch (error) {
				console.log(error);
		}
	}

	console.log('USER ', updateUser); 
	return (
		<>
			<FormContainer>
				<Form onSubmit={submitHandler}>
					<FormHeading> Update profile info </FormHeading>

					<FormInput 
						name="name" 
						type="text" 
						onChange={(event) => setName(event.target.value)} 
						value={name}
					/>

					<FormInput 
						name="username" 
						type="text" 
						onChange={(event) => setUsername(event.target.value)} 
						value={username}
					/>
					
					<FormInput 
						name="email" 
						type="text"  
						onChange={(event) => setEmail(event.taget.value)} 
						value={email}
					/> 
					<EditSubmit> Done editing! </EditSubmit>
				</Form>
			</FormContainer>
		</>
	)
	
}

export default withRouter(ProfileEdit);

const EditSubmit = styled(Button)`
	width: 33%;
	margin: 50px auto 0 auto;

	:hover {
			color: white;
			background-color: rgb(0, 133, 255);
	}

`