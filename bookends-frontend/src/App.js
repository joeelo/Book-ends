import React, { useContext } from 'react';
import { Route, Switch } from "react-router-dom";
import { UserContext } from './context/UserContext';
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

const App = (props) => {

  const { user } = useContext(UserContext);

  return (
    <>
      <GlobalStyle />
      <div className="App">

        {!!user.id && user.id !== "" ?
            <LoggedInNavBar user={user} />
          : 
            <NotLoggedInNavBar />
        } 
        
        { !!user.id && user.id !== "" && <NoteButton/> } 
        
      </div>

      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/sign-up" render={() => <NewUserForm />} />
        <Route exact path="/login" render={() => <LoginForm/>}/>
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" render={(props) => <ProfileEdit />}/> 
        <Route exact path="/profile/change-password" render={(props) => <PasswordChangeForm />}/>
        <Route exact path="/books/search/:title" component={ BookContainer }/>
        <Route exact path="/book/:id" component={ BookDetails }/>
        <Route exact path="/book/:id/reviews"  />
        <Route exact path="/review/list/:username" render={() => <UserBookList />}/>
        <Route exact path="/note" render={(props) => <NewNoteForm />}/>
        <Route exact path="/notes/:username" render={(props) => <UserNotes/> }/>
        <Route exact path="/notes/:id/view" component={NoteView}/>
        <Route exact path="/notes/:id/edit" component={NoteEditForm}/>
      </Switch>
    </>

  );
  
}

export default App;
