import React, { Component } from 'react';
import logo from './logo.svg';
import axios from '../node_modules/axios';

import './App.css';
import Quiz from './Quiz/Quiz';

class App extends Component {
  state = {
    Questions: [],
    QuestionNumber: 0,
    checked: false,
  };
  count = 0;
  flag = false;
  async getData() {
    await axios
      .get('https://limitless-scrubland-76769.herokuapp.com/')
      .then((response) => {
        console.log(response.data);
        this.setState({
          Questions: response.data.data,
        });
      });
    this.flag = true;
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
    if (this.flag === false) {
      this.getData();
    }
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        {this.flag ? <Quiz Ques={this.state} /> : null}
        <button onClick={this.QuestionHandler}>next</button>
      </div>
    );
  }
}

export default App;
