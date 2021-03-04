import React from 'react';
import './Quiz.css';
import { InputGroup, FormControl } from 'react-bootstrap';

const Quiz = (props) => {
  let Q = props.Ques.QuestionNumber;
  return (
    
    <div className='quiz'>
      <div className='question'>
        <p>
          Question {Q + 1}:{props.Ques.Questions[Q].col_2}{' '}
        </p>
      </div>
      <div className='options'>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio value="1" name={'options'} />
          </InputGroup.Prepend>
          <FormControl
            type='text'
            value={props.Ques.Questions[Q].col_3}
            readOnly
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio name={'options'} />
          </InputGroup.Prepend>
          <FormControl
            type='text'
            value={props.Ques.Questions[Q].col_4}
            readOnly
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio name={'options'} />
          </InputGroup.Prepend>
          <FormControl
            type='text'
            value={props.Ques.Questions[Q].col_5}
            readOnly
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio name={'options'} />
          </InputGroup.Prepend>
          <FormControl
            type='text'
            value={props.Ques.Questions[Q].col_6}
            readOnly
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default Quiz;
