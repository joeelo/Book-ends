import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UsersBook from './UsersBook';
import styled from 'styled-components';
import { Container } from '../styles/styledElements';
import randomColorGenerator from '../styles/randomColorGenerator';
import { Button } from '../styles/styledElements';
import { UserContext } from '../context/UserContext';

const ProfileInfo = (props) => {
  const [books, setBooks] = useState(null);
  const [ backgroundColor, setBackgroundColor ] = useState(null); 

	const user = useContext(UserContext);

  useEffect(() => {
    const randomColor = randomColorGenerator();
    setBackgroundColor(randomColor);
  }, [setBackgroundColor]);

  const checkUser = () => {
    if (props.user.id === '' || props.user.id === null) {
      props.history.push('/');
      console.log('cannot access page without a user');
    }
  }

  const fetchAllUserBooks = async () => {
    try {
      const url = `http://localhost:3000/user/show/${props.user.id}`;
      const response = await fetch(url);
      const json = await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  const renderUsersBookList = () => {
    const booksArray = books.books.map((book, index) => {
      return <UsersBook key={index} book={book} />
    })
    return booksArray;
  }

	const style = {
		backgroundColor
	}

  console.log('user: ', user);

  return (
    <ProfileContainer>
      <Header style={style}>
        <BaseLineH1> Your Profile </BaseLineH1>
      </Header>

      <FlexContainer>
        <ContentContainer>
          <BorderCircle
            style={{ border: `3px solid ${backgroundColor}` }}
          >
            <Image src='https://miro.medium.com/fit/c/256/256/2*YV7osFJW-MqQ4cqDsBIRPQ.jpeg' />
          </BorderCircle>
          <h3>Name: {props.user.name}</h3>
          <h3>username: {props.user.username}</h3>
          <h3>email: {props.user.email}</h3>
          <h3>Password: *********</h3>
          <Link to='/profile/edit'>
            {' '}
            <EditProfileButton> edit my info </EditProfileButton>{' '}
          </Link>

          <Link
            to={{
              pathname: '/profile/change-password',
              state: { user: props.user }
            }}
          >
            {' '}
            <Button> change password </Button>
          </Link>
        </ContentContainer>

        <ContentContainer>
          <MyBooksHeading>My Books</MyBooksHeading>
          <BookContainer>
            {books ? this.renderUsersBookList() : null}
          </BookContainer>
        </ContentContainer>
      </FlexContainer>
    </ProfileContainer>
  )
}

export default withRouter(ProfileInfo)

ProfileInfo.defaultProps = {
  user: {}
}

const ProfileContainer = styled(Container)`
  width: 100vw;
  padding: 0;
  font-family: Playfair Display, serif;
  font-weight: 300;
`

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  width: 100%;
  height: 150px;
  align-items: baseline;
  justify-content: baseline;
  margin-bottom: 30px;
`

const BaseLineH1 = styled.h1`
  align-self: flex-end;
  margin: 0 0 0 10%;
  font-family: Playfair Display, serif;
  font-size: 48px;
`

const FlexContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const ContentContainer = styled.div`
  width: 50%;
  min-width: 300px;
  flex-wrap: wrap;
`

const BookContainer = styled.div`
  width: 50%;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`

const Image = styled.img`
  border-radius: 50%;
  position: relative;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 200px;
`

const BorderCircle = styled.div`
  height: 220px;
  width: 220px;
  border-radius: 50%;
`

const MyBooksHeading = styled.h2`
  padding: 0;
  margin: 0;
`

const EditProfileButton = styled(Button)`
  :hover {
    background-color: teal;
  }
`
