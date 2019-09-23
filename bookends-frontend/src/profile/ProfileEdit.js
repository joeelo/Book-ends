import React, { Component } from 'react'
import { withRouter } from "react-router-dom"



class ProfileEdit extends Component {
    componentDidMount() {
        this.getUserInfo();
    }
    
    getUserInfo = async () => {
        const user = this.props.location.state.user;
        console.log(user);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                
            </div>
        )
    }
}

export default withRouter(ProfileEdit);