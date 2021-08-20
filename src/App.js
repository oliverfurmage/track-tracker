
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component, useContext, createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './components/home/Home';
import FavouriteTracks from './components/favouriteTracks/FavouriteTracks';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: null,
      user: null,
      userLoaded: false
    };

  }

  componentDidMount() {
    this.checkAuth();
    this.getUser();
  }

  checkAuth() {
    var excludedRoutes = ["/logout", "/login"];
    var path = window.location.pathname.toLowerCase();


    if (!excludedRoutes.includes(path)) {
      var token = localStorage.getItem("token");
      console.log(token);
      if (token == "null" || token == null) {
        window.location.href = "/logout";
      }
    }

  }

  getUser() {
    var token = localStorage.getItem("token");

    fetch(`https://api.spotify.com/v1/me`, { headers: { 'Authorization': 'Bearer ' + token } })
      .then(res => res.json())
      .then(
        // success
        (user) => {
          this.setState({
            user: user,
            userLoaded: true
          });
        });
  }

  render() {
    return (
      <div className="tt-app">

        {this.state.userLoaded ? (
          <div className="tt-main">
            <Router>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/logout">
                  <Logout />
                </Route>
                <PrivateRoute path="/favourite-tracks" user={this.state.user}>
                  <FavouriteTracks />
                </PrivateRoute>
                <PrivateRoute path="/" user={this.state.user}>
                  <Home />
                </PrivateRoute>
              </Switch>
            </Router>
          </div>
        ) : ""}

      </div>
    );
  }

}

function PrivateRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        user ?
          (children) :
          (<Redirect to={{ pathname: "/login" }} />)
      }
    />
  );
}

export default App;
