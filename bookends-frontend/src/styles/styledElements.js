import styled from "styled-components";

const HeaderButton = styled.button`
	padding: 0;
	margin: 5px 15px;
	border: none;
	background: none;
	font-family: lato, sans-serif;
	font-size: 14px;
	cursor: pointer;

	:hover {
			text-decoration: underline;
	}

	:focus {
			outline: 0;
	}

	@media screen and (max-width: 768px) {
		margin: 10px 0;
	}
`

const Logo = styled.img`
	height: 140px;
	margin-top: 10px;

	@media screen and (max-width: 768px) {
			display: none;
	}
`

const Button = styled.button`
	padding: 10px 15px;
	transition: .3s ease-in-out all;
	background-color: white;
	border: 1px solid black;

	:hover {
			transform: translateY(-2px);
			box-shadow: 3px 3px 2px 2px #D3D3D3;
	}
`

const Container = styled.div`
	width: 60vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding: 10px;

	@media screen and (max-width: 768px) {
			width: 100vw;
	}
`

const NoteHeading = styled.h1`
	background-color: white;
	width: 90%;
	padding: 15px;
	font-family: Playfair Display, serif; 
	font-weight: 400;
`

const NoteContent = styled.p`
	width: 90%;
	background-color: white;
	margin-top: 20px;
	min-height: 400px;
	padding: 10px 15px;
	font-family: Lato, sans-serif;
`

const PlayfairHeading = styled.h1`
	font-family: Playfair Display, serif; 
`

const StyledContainer = styled.div`
	display: flex; 
	flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
`

export {
	HeaderButton, 
	Button,
	Logo, 
	Container, 
	NoteHeading,
	NoteContent, 
	PlayfairHeading, 
	StyledContainer
}