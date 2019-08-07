import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom"
import './App.css';
import BookSearchForm from "./book/BookSearchForm"
import BookDetails from './book/BookDetails';
import ReviewPage from "./review/ReviewPage"
import Profile from "./profile/ProfileInfo"
import NavBar from "./nav/NavBar"
import NewUserForm from './login/NewUserForm';

class App extends Component {

  state = {
    user: {
      id: "5d2924256ea7922d902f02f6",
      name: "Joe Lorenzo", 
      email: "same@ail.com"
    }
  }

  loginUser = async (user) => {
    try {
      console.log(user);
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    return (
  
      <Fragment>
  
        <div className="App">
          <NavBar />

        </div>

        <Switch>
          <Route path="/profile" render={() => <Profile user={this.state.user}/>} />
          <Route path="/book/:id/review" component={ReviewPage} />
          <Route exact path="/books" component={BookSearchForm} />
          <Route path="/book/:id" component={BookDetails}/>
          <Route exact path="/sign-up" render={() => <NewUserForm loginUser={this.loginUser} history={this.props.history}/>} />
        </Switch>
        </Fragment>
  
    );
  }
}

export default App;
