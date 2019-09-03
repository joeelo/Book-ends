import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
                <Link to="/sign-up"> Sign Up </Link>
                <Link to="/login"> Login </Link>
            </div>
        )
    }
}
