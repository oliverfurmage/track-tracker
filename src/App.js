
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import FavouriteTracks from './components/favouriteTracks/FavouriteTracks';

export const authEndpoint = 'https://accounts.spotify.com/authorize?';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "07821bcdfa0f45148a5f9178f8f48a01";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-top-read"
];

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      token : null
    };
  }

  componentDidMount(){
    let _token = hash.access_token;
    // Set token
    if (_token) {
      this.setState({
        token: _token
      });
    // Direct to Spotify
    } else{
      window.location.href = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
    }

  }

  render() {
    return (
      <div className="tt-app">

        <div className="tt-main">

          
          {this.state.token != null ? (
            <FavouriteTracks token={this.state.token}/>
          ) : "" }

        </div>

      </div>
  );
 }
}

export default App;
