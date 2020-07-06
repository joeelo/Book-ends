import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const NoteButton = (props) => {
	return (
	<Link to="/note"> 
		<NoteBtn>
			<AddButton> <FontAwesomeIcon icon={faPencilAlt} style={{width: '25px'}}/> </AddButton>
		</NoteBtn>
	</Link>
	)
}

export default NoteButton;

const NoteBtn = styled.div`
	top: 30%;
	left: 20px;
	position: fixed;
	background-color: white;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(250, 150, 150, 0.8);
`

const AddButton = styled.span`
	font-size: 3em;
	color: white;
`
