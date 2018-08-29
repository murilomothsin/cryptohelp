import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import OptionsList from './components/OptionsList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <OptionsList />
      </div>
    );
  }
}

export default App;
