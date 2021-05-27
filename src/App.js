import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {date : new Date()};
  }

  render() {
    return (
      <div className="tt-app">

        <div className="tt-main">
          {this.state.date.toLocaleTimeString()}
        </div>

      </div>
  );
 }
}

export default App;
