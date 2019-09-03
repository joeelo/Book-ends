import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BookSearchFrom from "../book/BookSearchForm";


class LoggedInNavBar extends Component {
    render() {
        const divStyle = {
            display: "flex", 
            justifyContent: "space-around"
        }
        const user = this.props.user;
        console.log(user);
        return (
            <div style={divStyle}>
                <Link to="/profile" > Profile </Link>
                <Link to="/"> Log Out </Link>
                <Link to={`/notes/${user.userName}`}> My notes </Link>
                <BookSearchFrom updateSearchTerm={this.props.updateSearchTerm}/>
            </div>
        )
    }
}

export default LoggedInNavBar