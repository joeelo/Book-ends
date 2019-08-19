import React, {Fragment, Component} from 'react';
import { Route, Switch} from "react-router-dom";
import './App.css';
import BookSearchForm from "./book/BookSearchForm";
import BookDetails from './book/BookDetails';
import ReviewPage from "./review/ReviewPage";
import Profile from "./profile/ProfileInfo";
import NavBar from "./nav/NavBar";
import NewUserForm from './login/NewUserForm';
import LoginForm from "./login/LoginForm"

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
      id: "5d4b329866245b0731d3fd4f", 
      name: "Joe Lorenzo", 
      email: "joeephus@gmail.com"
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

        </div>

        <Switch>
          <Route exact path="/profile" render={() => <Profile user={this.state.user}/>} />
          <Route path="/book/:id/reviews" component={ReviewPage} />
          <Route path="/book/:id" render={ (props) => <BookDetails user={this.state.user} props={props}/>}/>
          <Route exact path="/books" component={BookSearchForm} />
          <Route exact path="/sign-up" render={() => <NewUserForm loginUser={this.loginUser} />} />
          <Route exact path="/login" render={() => <LoginForm loginUser={this.loginUser}/>}/>
        </Switch>
      </Fragment>

    );
  }
}

export default App;
