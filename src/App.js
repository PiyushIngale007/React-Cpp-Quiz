import React, { Component } from 'react';
import logo from './logo.svg';
import axios from '../node_modules/axios';

import './App.css';
import Quiz from './Quiz/Quiz';
import Spinner from 'react-bootstrap/Spinner';

class App extends Component {
  state = {
    Questions: [],
    QuestionNumber: 0,
    checked: false,
    flag: false,
  };
  count = 0;

  async getData() {
    await axios
      .get('https://limitless-scrubland-76769.herokuapp.com/')
      .then((response) => {
        console.log(response.data);
        this.setState({
          flag: true,
          Questions: response.data.data,
        });
      });
  }
  QuestionHandler = () => {
    if (this.state.checked === true) {
      console.log('correct');
    } else {
      console.log('wrong');
    }
    this.setState({
      checked: false,
    });
    if (this.count < 9) {
      this.setState({
        QuestionNumber: (this.count += 1),
      });
    }
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
        </header>
        {this.state.flag ? (
          <Quiz Ques={this.state} />
        ) : (
          <div style={spinner}>
            <Spinner animation='border' role='status'>
              <span className='sr-only'>Loading...</span>
            </Spinner>
          </div>
        )}
        <button onClick={this.QuestionHandler}>next</button>
      </div>
    );
  }
}

export default App;
