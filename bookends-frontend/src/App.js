import React, {Fragment} from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import './App.css';
import BookSearchForm from "./bookSearch/BookSearchForm"
import BookDetails from './bookSearch/BookDetails';
import ReviewPage from "./review/ReviewPage"


function App() {
  return (

    <Fragment>

      <div className="App">
        <p>working</p>

        <Link to="books"> Book </Link>
      </div>
      <Switch>
      <Route exact path="/books" component={BookSearchForm} />
      <Route path="/book/:title" component={BookDetails}/>
      <Route path="/book/:id/review" component={ReviewPage} />

      </Switch>
      </Fragment>

  );
}

export default App;
