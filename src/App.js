import React, { Component } from 'react';
import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import Cocktails from './containers/Cocktails';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Cocktails/>
      </div>
    );
  }
}

export default App;
