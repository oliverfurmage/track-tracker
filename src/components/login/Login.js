import React, { Component } from 'react';
import { Redirect } from 'react-router';

const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientId = process.env.REACT_APP_SPOTIFY_CLIENTID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT;
const scopes = [
  "user-top-read",
  "user-read-email"
];

const authUrl = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

class Login extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

        var hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce(function(initial, item) {
          if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
          }
          return initial;
        }, {});

        let hashToken = hash.access_token;
    
        if(hashToken){
          localStorage.setItem("token", hashToken);
        }

        // Get Token
        var _token = localStorage.getItem("token");

        if(_token == "null" || _token == null){
            window.location.href = authUrl;
        } else{
            window.location.href = "/";
        }
    }

    render(){
        return (
            <div>
                <em className="fa fa-spinner"></em>
            </div>
        )
    }
}

export default Login