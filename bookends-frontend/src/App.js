import React, {Fragment, Component} from 'react';
import { Route, Switch} from "react-router-dom";
import './App.css';
import BookSearchForm from "./book/BookSearchForm";
import BookDetails from './book/BookDetails';
import ReviewPage from "./review/ReviewPage";
import Profile from "./profile/ProfileInfo";
import NavBar from "./nav/NavBar";
import NewUserForm from './login/NewUserForm';
import LoginForm from "./login/LoginForm";
import NoteButton from "./notes/NoteButton";
import NoteForm from "./notes/NoteForm";
import UserNotes from "./notes/UserNotes";
import NoteEditForm from './notes/NoteEditForm';
import NoteView from "./notes/NoteView";


class App extends Component {

  // state = {
  //   user: {
  //     id: "",
  //     name: "", 
  //     email: "",
  //   }
  // }

  state = {
    user: {
      id: "5d656a91ea12f507b1013a41", 
      name: "Joe Lorenzo", 
      email: "example@gmail.com",
      userName: "joeephus"
    }
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

    return (

      <Fragment>
  
        <div className="App">
          <NavBar user={this.state.user}/>
          <NoteButton />
        </div>

        <Switch>
          <Route exact path="/profile" render={() => <Profile user={this.state.user}/>} />
          <Route path="/book/:id/reviews" component={ReviewPage} />
          <Route path="/book/:id" render={ (props) => <BookDetails user={this.state.user} props={props}/>}/>
          <Route exact path="/books" component={BookSearchForm} />
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
