import React, {Fragment, Component} from 'react';
import { Route, Switch} from "react-router-dom";
import './App.css';
import { createGlobalStyle } from "styled-components";
import HomePage from "./home/HomePage";
import BookContainer from "./book/BookContainer";
import BookDetails from './book/BookDetails';
import UserBookList from "./book/UserBookList"
import ReviewPage from "./review/ReviewPage";
import Profile from "./profile/ProfileInfo";
import NewUserForm from './login/NewUserForm';
import LoginForm from "./login/LoginForm";
import NoteButton from "./buttons/NoteButton";
import NewNoteForm from "./notes/NewNoteForm";
import UserNotes from "./notes/UserNotes";
import NoteEditForm from './notes/NoteEditForm';
import NoteView from "./notes/NoteView";
import NotLoggedInNavBar from "./nav/NotLoggedInNavBar";
import LoggedInNavBar from './nav/LoggedInNavBar';
import ProfileEdit from "./profile/ProfileEdit";
import PasswordChangeForm from "./profile/PasswordChangeForm";

const GlobalStyle = createGlobalStyle`

body, html {
  width: 100vw;
}

body {
    padding: 0; 
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Lato|Playfair+Display&display=swap');
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
    min-width: 100vw;
  }
`


class App extends Component {

  state = {
    searchTerm: "",
    user: {
      id: "",
      name: "", 
      username: "",
      email: "",
    }
  }

  // state = {
  //   searchTerm: "",
  //   user: {
  //     id: "5d656a91ea12f507b1013a41", 
  //     name: "Joe Lorenzo", 
  //     email: "example@gmail.com",
  //     username: "joeephus"
  //   }
  // }

  updateSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }  

  loginUser = async (userInfo) => {
    try {
      this.setState({
        user: {
          id: userInfo._id,
          name: userInfo.name,
          username: userInfo.username,
          email: userInfo.email,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  updateUser = async (userInfo) => {
    const { name, username, email} = userInfo;
    const newUser = {...this.state.user}
    newUser.name = name;
    newUser.username = username;
    newUser.email = email;
    console.log(newUser);
    try {
      this.setState({
        user: newUser
      })
      // this.setState();
    } catch (error) {
      console.log(error);
    }
  }

  logoutUser = () => this.setState({user: {}})

  render() {
    console.log(this.state.user);
    return (

      <Fragment>
  
        <div className="App">
          <GlobalStyle />

          {this.state.user.id !== undefined && this.state.user.id !== "" ?
              <LoggedInNavBar user={this.state.user} updateSearchTerm={this.updateSearchTerm} logoutUser={this.logoutUser}/>
            : 
              <NotLoggedInNavBar />
          } 
          
          {this.state.user.id !== undefined && this.state.user.id !== "" ?
              <NoteButton/>
            : 
              null
          } 
          
        </div>

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/sign-up" render={() => <NewUserForm loginUser={this.loginUser} />} />
          <Route exact path="/login" render={() => <LoginForm loginUser={this.loginUser}/>}/>
          <Route exact path="/profile" render={() => <Profile user={this.state.user}/>} />
          <Route exact path="/profile/edit" render={(props) => <ProfileEdit user={this.state.user} updateUser={this.updateUser}/>}/> 
          <Route exact path="/profile/change-password" render={(props) => <PasswordChangeForm user={this.state.user}/>}/>
          <Route exact path="/books/view" render={(props) => <BookContainer searchTerm={this.state.searchTerm}/>}/>
          <Route exact path="/book/:id" render={ (props) => <BookDetails user={this.state.user} props={props}/>}/>
          <Route exact path="/book/:id/reviews" component={ReviewPage} />
          <Route exact path="/review/list/:username" render={() => <UserBookList />}/>
          <Route exact path="/note" render={(props) => <NewNoteForm user={this.state.user}/>}/>
          <Route exact path="/notes/:username" render={(props) => <UserNotes user={this.state.user}/> }/>
          <Route exact path="/notes/:id/view" component={NoteView}/>
          <Route exact path="/notes/:id/edit" component={NoteEditForm}/>
        </Switch>
      </Fragment>

    );
  }
}

export default App;
