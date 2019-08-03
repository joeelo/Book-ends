import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './App.css';
import BookSearchForm from "./bookSearch/BookSearchForm"
import BookDetails from './bookSearch/BookDetails';
import ReviewPage from "./review/ReviewPage"
import Profile from "./profile/ProfileInfo"

class App extends Component {

  state = {
    user: {
      id: "5d42d6b70adc7a1fda9f9b95",
      name: "Joe Lorenzo", 
      email: "same@ail.com"
    }
  }

  render() {

    return (
  
      <Fragment>
  
        <div className="App">

          <Link to="/books"> Book </Link> <br/>
          <Link to="/profile" > Profile </Link>

        </div>

        <Switch>
          <Route path="/profile" render={() => <Profile user={this.state.user}/>} />
          <Route path="/book/:id/review" component={ReviewPage} />
          <Route exact path="/books" component={BookSearchForm} />
          <Route path="/book/:title" component={BookDetails}/>
    
        </Switch>
        </Fragment>
  
    );
  }
}

export default App;
