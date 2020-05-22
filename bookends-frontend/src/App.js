import React from 'react';
import { Route, Switch } from "react-router-dom";
import { UserProvider } from './context/UserContext';
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
import { GlobalStyle } from './styles/globalStyles';

const App = () => {


  // state = {
  //   searchTerm: "",
  //   user: {
  //     id: "",
  //     name: "", 
  //     username: "",
  //     email: "",
  //   }
  // }

  const user = {
    user: {
      "id": "5e38e1898b65a410f4b324c4",
      "name": "joe",
      "username": "lorenzo",
      "email": "joeephus@gmail.com",
      "password": "Angel004",
    }
  }

  return (
    <>
      <GlobalStyle />
      <UserProvider value={user}>
      {/* <div className="App">

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
        
      </div> */}

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/sign-up" render={() => <NewUserForm />} />
        <Route exact path="/login" render={() => <LoginForm/>}/>
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/profile/edit" render={(props) => <ProfileEdit />}/> 
        <Route exact path="/profile/change-password" render={(props) => <PasswordChangeForm />}/>
        <Route exact path="/books/view" render={(props) => <BookContainer />}/>
        <Route exact path="/book/:id" render={ (props) => <BookDetails />}/>
        <Route exact path="/book/:id/reviews"  />
        <Route exact path="/review/list/:username" render={() => <UserBookList />}/>
        <Route exact path="/note" render={(props) => <NewNoteForm />}/>
        <Route exact path="/notes/:username" render={(props) => <UserNotes/> }/>
        <Route exact path="/notes/:id/view" component={NoteView}/>
        <Route exact path="/notes/:id/edit" component={NoteEditForm}/>
      </Switch>
      </UserProvider>
    </>

  );
  
}

export default App;
