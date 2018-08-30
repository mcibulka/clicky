import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Instructions from './components/Instructions';
import GameBoard from './components/GameBoard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Instructions />
        <GameBoard />
      </div>
    );
  }
}

export default App;
