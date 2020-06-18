import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import BookThumbnail from "./BookThumbnail";

const BookContainer = (props) => {

	const [ books, setBooks ] = useState(null);

	const fetchBooks = async () => {
			const bookSearchTerm = props.match.params.title; 
			try {
					const url = `http://localhost:3000/book/${props.match.params.title}`;
					const response = await fetch(url);
					console.log(response);
					const json = await response.json();
					if (json) {
						setBooks(json);
					} else {
						setBooks([]);
					}
			} catch (error) {
					console.log(error);
			}
	}

	useEffect(() => {
		if (books) return; 
			fetchBooks();
	}, [books, props.match.params.title]);

	if (!books) return <></>
	return (
		<>
				{ books.map((book, index) => <BookThumbnail key={index} book={book} />) }
		</>
	)
	
}

export default withRouter(BookContainer);

BookContainer.defaultProps = {
	searchTerm: ''
}