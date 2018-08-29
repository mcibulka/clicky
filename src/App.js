import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Instructions from './components/Instructions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Instructions />
      </div>
    );
  }
}

export default App;
