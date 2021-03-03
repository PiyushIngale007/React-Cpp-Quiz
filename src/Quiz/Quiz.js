import React from 'react';
import './Quiz.css';
import { InputGroup, FormControl } from 'react-bootstrap';

const Quiz = (props) => {
  return (
    <div className='quiz'>
      <div className='question'>
        <p>Question : </p>
      </div>
      <div className='options'>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio name='options' />
          </InputGroup.Prepend>
          <FormControl type='text' value={props.a} readOnly />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio name='options' />
          </InputGroup.Prepend>
          <FormControl type='text' readOnly />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio name='options' />
          </InputGroup.Prepend>
          <FormControl type='text' readOnly />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio name='options' />
          </InputGroup.Prepend>
          <FormControl type='text' readOnly />
        </InputGroup>
      </div>
    </div>
  );
};

export default Quiz;
