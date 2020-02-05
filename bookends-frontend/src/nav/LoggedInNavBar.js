import React, { useState } from 'react';
import { Link } from "react-router-dom";
import BookSearchFrom from "../forms/BookSearchForm";
import styled from "styled-components";
import { HeaderButton, Logo } from "../styles/styledElements";

const LoggedInNavBar = (props) => {

	const [ visible, setVisible ] = useState(false);

	const user = props.user;

	return (
		<>
			<HamburgerMenu 
				src='/images/icons8-menu.svg' 
				alt='3 horizontal bars making a hamburger menu'
				onClick={() => setVisible(!visible)}
			
			/>
			<NavBarContainer visible={visible}>
				<LeftContainer>
					<Logo alt="My Reads logo" src="/images/myReadsLogo.png"/>
					<Link to="/profile" > <HeaderButton> Profile </HeaderButton> </Link>
					<Link to={`/notes/${user.username}`}> <HeaderButton> My notes </HeaderButton> </Link>
				</LeftContainer>
				<RightContainer>
					<BookSearchFrom updateSearchTerm={props.updateSearchTerm}/>
					<Link to="/"> <HeaderButton onClick={props.logoutUser}> Log Out </HeaderButton> </Link>
				</RightContainer>
			</NavBarContainer>
		</>
	)

}

export default LoggedInNavBar;

const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 70px;
	align-items: center;

	max-width: 1200px; 

	@media screen and (max-width: 768px) {
			flex-direction: column;
			display: ${props => props.visible === true ? 'block' : 'none'};
	}
`

const LeftContainer = styled.div`
	display: flex;
	justify-content: space-around;
	justify-self: flex-start;
	height: 70px;
	align-items: center;
`

const RightContainer = styled.div`
	display: flex;
	justify-content: flex-end; 
	justify-self: flex-end;
	height: 70px;
	align-items: center;
	margin-right: 50px;
`

const HamburgerMenu = styled.img`
  width: 30px; 
	position: absolute; 
	right: 20px; 
	top: 20px; 

  :hover {
      cursor: pointer;
  }

	@media screen and (min-width: 768px) {
		display: none;
	}
`