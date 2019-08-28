import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BookSearchFrom from "../book/BookSearchForm";


export default class NavBar extends Component {
    render() {
        const divStyle = {
            display: "flex", 
            justifyContent: "space-around"
        }
        const user = this.props.user;
        console.log(user);
        return (
            <div style={divStyle}>
                <Link to="/books"> Book </Link> <br/>
                <Link to="/profile" > Profile </Link>
                <Link to="/sign-up"> Sign Up </Link>
                <Link to="/login"> Login </Link>
                <Link to={`/notes/${user.userName}`}> My notes </Link>
                <BookSearchFrom updateSearchTerm={this.props.updateSearchTerm}/>
            </div>
        )
    }
}

