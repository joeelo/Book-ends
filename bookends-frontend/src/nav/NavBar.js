import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class NavBar extends Component {
    render() {
        const divStyle = {
            display: "flex", 
            justifyContent: "space-around"
        }
        return (
            <div style={divStyle}>
                <Link to="/books"> Book </Link> <br/>
                <Link to="/profile" > Profile </Link>
                <Link to="/sign-up"> Sign Up </Link>
            </div>
        )
    }
}

