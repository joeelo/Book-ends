import React, {Fragment, Component} from 'react';
import { Route, Switch} from "react-router-dom";
import './App.css';
import { createGlobalStyle } from "styled-components";
import BookContainer from "./book/BookContainer";
import BookDetails from './book/BookDetails';
import UserBookList from "./book/UserBookList"
import ReviewPage from "./review/ReviewPage";
import Profile from "./profile/ProfileInfo";
import NavBar from "./nav/NavBar";
import NewUserForm from './login/NewUserForm';
import LoginForm from "./login/LoginForm";
import NoteButton from "./buttons/NoteButton";
import NoteForm from "./notes/NoteForm";
import UserNotes from "./notes/UserNotes";
import NoteEditForm from './notes/NoteEditForm';
import NoteView from "./notes/NoteView";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: rgb(2,0,41);
    background: linear-gradient(135deg, rgba(2,0,41,0.9836309523809523) 0%, rgba(9,121,95,1) 13%, rgba(0,212,255,1) 100%);
  }
`


class App extends Component {

  // state = {
  //   user: {
  //     id: "",
  //     name: "", 
  //     email: "",
  //   }
  // }

  state = {
    searchTerm: "",
    user: {
      id: "5d656a91ea12f507b1013a41", 
      name: "Joe Lorenzo", 
      email: "example@gmail.com",
      userName: "joeephus"
    }
  }

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
          email: userInfo.email,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.searchTerm);
    return (

      <Fragment>
  
        <div className="App">
          {/* <GlobalStyle /> */}
          <NavBar user={this.state.user} updateSearchTerm={this.updateSearchTerm}/>
          <NoteButton />
        </div>

        <Switch>
          <Route exact path="/profile" render={() => <Profile user={this.state.user}/>} />
          {/* <Route exact path="/books" render={ (props) => <BookSearchForm updateSearchTerm={this.updateSearchTerm}/>} /> */}
          <Route path="/books/view" render={(props) => <BookContainer searchTerm={this.state.searchTerm}/>}/>
          <Route exact path="/book/:id" render={ (props) => <BookDetails user={this.state.user} props={props}/>}/>
          <Route path="/book/:id/reviews" component={ReviewPage} />
          <Route exact path="/review/list/:username" render={() => <UserBookList />}/>
          <Route exact path="/sign-up" render={() => <NewUserForm loginUser={this.loginUser} />} />
          <Route exact path="/login" render={() => <LoginForm loginUser={this.loginUser}/>}/>
          <Route exact path="/note" render={(props) => <NoteForm user={this.state.user}/>}/>
          <Route exact path="/notes/:username" component={UserNotes}/>
          <Route exact path="/notes/:id/view" component={NoteView}/>
          <Route exact path="/notes/:id/edit" component={NoteEditForm}/>
        </Switch>
      </Fragment>

    );
  }
}

export default App;
