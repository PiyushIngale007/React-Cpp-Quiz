import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Quiz from './Quiz/Quiz';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <Quiz />
      </div>
    );
  }
}

export default App;
