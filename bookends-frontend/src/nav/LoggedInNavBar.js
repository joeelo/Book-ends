import React, { useState } from 'react';
import { Link } from "react-router-dom";
import BookSearchForm from "../forms/BookSearchForm";
import styled from "styled-components";
import { HeaderButton, Logo, StyledContainer } from "../styles/styledElements";

const LoggedInNavBar = (props) => {

	const [ visible, setVisible ] = useState(false);

	const user = props.user;

	return (
		<>

			<Menu>
				<HamburgerMenu 
					src='/images/icons8-menu.svg' 
					alt='3 horizontal bars making a hamburger menu'
					onClick={() => setVisible(!visible)}
				/>
			</Menu>

			<NavBarContainer visible={visible} className='NavBarContainer'>
				<LeftContainer>
					<Logo alt="My Reads logo" src="/images/myReadsLogo.png"/>
					<Link to="/profile" > <HeaderButton> Profile </HeaderButton> </Link>
					<Link to={`/notes/${user.username}`}> <HeaderButton> My notes </HeaderButton> </Link>
				</LeftContainer>
				<RightContainer>
					<BookSearchForm updateSearchTerm={props.updateSearchTerm}/>
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
	margin: 0 auto;
	max-width: 1200px; 

	@media screen and (max-width: 768px) {
			flex-direction: column;
			display: ${props => props.visible === true ? 'block' : 'none'};
			align-items: flex-start;
	}
`

const NavContainer = styled.div`
	display: flex ;
	align-items: center; 

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		align-items: flex-start;
		padding-left: 40px; 
	}
`

const LeftContainer = styled(NavContainer)`
	display: flex;
	justify-content: space-around;
	justify-self: flex-start;
	height: 70px;
	align-items: center;
`

const RightContainer = styled(NavContainer)`
	display: flex;
	justify-content: flex-end; 
	justify-self: flex-end;
	height: 70px;
	align-items: center;
	margin-right: 50px;
`

const HamburgerMenu = styled.img`
  width: 30px; 

  :hover {
      cursor: pointer;
  }
`

const Menu = styled(StyledContainer)`
	align-items: center;
	padding-left: 40px;
	height: 70px;
	display: none;

	@media screen and (max-width: 768px) {
		display: flex;
	}
`
