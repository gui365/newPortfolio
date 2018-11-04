import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
