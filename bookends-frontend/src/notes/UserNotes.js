import React, { useState, useEffect, useContext } from "react"
import NoteInstance from "./NoteInstance";
import styled from "styled-components";
import ErrorBoundary from '../errors/ErrorMessage';
import { UserContext } from '../context/UserContext';

const UserNotes = (props) => {

	const [ notes, setNotes ] = useState(null);
	const { user } = useContext(UserContext);
	
	const fetchNotes = async () => {
		//TODO: fix route problem note shows upon load after deletion before refresh
		try {
			const username = user.username
			const url = `http://localhost:3000/notes/${username}`;
			const response = await fetch(url);
			const json = await response.json();
			if ( json.message ) {
				throw (json);
			}
			setNotes(json);
		} catch (error) {
			console.log(error);
		}
	}

	const generateRandomColor = () => {
			const r = 255 - ((Math.random() + 1) * 60);
			const g = 255 - ((Math.random() + 1) * 60);
			const b = 255 - ((Math.random() + 1) * 60);

			const colors = `rgb(${r}, ${g}, ${b})`
			return colors;
	}

	const renderNotes = () => {
		const username = user.username;
		const mappedNotes = notes.map((note) => {
			let randomColor = generateRandomColor();
			return <NoteInstance key={note._id} note={note} randomColor={randomColor} username={username}/>
		})
		return mappedNotes;
	}

	useEffect(() => {
		if (notes) return; 
		fetchNotes();
	}, [notes])

	if (!notes) return <></>
	return (
		<ErrorBoundary>
			<NoteWrapper>
				{renderNotes()}
			</NoteWrapper>
		</ErrorBoundary>
	)
	
}

export default UserNotes;

const NoteWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 350px);
	width: 80vw;
	grid-gap: 1rem;
	justify-content: space-around;
	margin: 0 auto;
`