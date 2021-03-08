import React, { Component } from 'react';
import logo from './ISO_C++_Logo.svg';
import axios from '../node_modules/axios';

import './App.css';
import Quiz from './Quiz/Quiz';
import Spinner from 'react-bootstrap/Spinner';
import QuizResult from './QuizResult/QuizResult';

class App extends Component {
  state = {
    Questions: [],
    QuestionNumber: 0,
    checked: false,
    flag: false,
    id: '',
    count: 0,
    score: 0,
  };

  async getData() {
    await axios
      .get('https://limitless-scrubland-76769.herokuapp.com/')
      .then((response) => {
        this.setState({
          flag: true,
          Questions: response.data.data,
        });
      });
  }

  QuestionHandler = () => {
    let n = this.state.count;
    if (this.state.id !== '') {
      if (this.state.checked === true) {
        this.setState({
          score: this.state.score + 1,
        });
      }

      document.getElementById(this.state.id).checked = false;
      this.setState({
        checked: false,
        id: '',
      });
      if (this.state.count < 9) {
        this.setState({
          QuestionNumber: n + 1,
          count: n + 1,
        });
      }
    } else {
      alert('Please Select an option.');
    }
  };

  showResult = () => {
    this.setState({
      count: 10,
    });
  };

  render() {
    if (this.state.flag === false) {
      this.getData();
    }

    const spinner = {
      height: '300px',
    };

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>C++ Quiz</h1>
        </header>
        {this.state.count < 10 && this.state.flag === true ? (
          <Quiz id='quiz' Ques={this.state} />
        ) : this.state.count < 5 ? (
          <div style={spinner}>
            <Spinner animation='border' role='status'>
              <span className='sr-only'>Loading...</span>
            </Spinner>
          </div>
        ) : (
          <QuizResult scorecard={this.state} />
        )}
        {this.state.count !== 9 ? (
          <button id='button' onClick={this.QuestionHandler}>
            Next
          </button>
        ) : (
          <button id='button' onClick={this.showResult}>
            Show Result
          </button>
        )}
      </div>
    );
  }
}

export default App;
