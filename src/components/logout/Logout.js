import React, { Component } from 'react';

const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientId = "07821bcdfa0f45148a5f9178f8f48a01";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-top-read"
];

class Logout extends Component{

    constructor(props){
        super(props);
        window.localStorage.removeItem("token");
        window.location.href = "/login";
    }

    componentDidMount(){
        window.localStorage.removeItem("token");
        window.location.href = "/login";
    }

    render(){

        return (
            "Logging Out..."
        )
    }
}

export default Logout