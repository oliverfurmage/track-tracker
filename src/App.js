
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home/Home';
import FavouriteTracks from './components/favouriteTracks/FavouriteTracks';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="tt-app">

        <div className="tt-main">
          <Router>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/logout">
                <Logout/>
              </Route>
              <Route path="/favourite-tracks">
                <FavouriteTracks/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>


        </div>

      </div>
  );
 }
}

export default App;
