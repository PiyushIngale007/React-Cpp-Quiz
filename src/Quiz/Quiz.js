import React from 'react';
import './Quiz.css';
import { InputGroup, FormControl } from 'react-bootstrap';

const Quiz = (props) => {
  let Q = props.Ques.QuestionNumber;
  let k = props.Ques.Questions[Q];
  let C_Flag = props.Ques.checked;
  const Checker = (id) => {
    C_Flag = false;
    if (document.getElementById(id).checked) {
      if (id === 'one') {
        if (k.col_3 === k.col_7) {
          C_Flag = true;
        }
      }
      if (id === 'two') {
        if (k.col_4 === k.col_7) {
          C_Flag = true;
        }
      }
      if (id === 'three') {
        if (k.col_5 === k.col_7) {
          C_Flag = true;
        }
      }
      if (id === 'four') {
        if (k.col_6 === k.col_7) {
          C_Flag = true;
        }
      }
      props.Ques.checked = C_Flag;
    }
  };
  return (
    
    <div className='quiz'>
      <div className='question'>
        <p>
          Question {Q + 1}:{k.col_2}{' '}
        </p>
      </div>
      <div className='options'>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio
              onClick={() => Checker('one')}
              id='one'
              value='1'
              name={'options'}
            />
          </InputGroup.Prepend>
          <FormControl type='text' value={k.col_3} readOnly />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio
              onClick={() => Checker('two')}
              id='two'
              value='2'
              name={'options'}
            />
          </InputGroup.Prepend>
          <FormControl type='text' value={k.col_4} readOnly />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio
              onClick={() => Checker('three')}
              id='three'
              value='3'
              name={'options'}
            />
          </InputGroup.Prepend>
          <FormControl type='text' value={k.col_5} readOnly />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Radio
              onClick={() => Checker('four')}
              id='four'
              value='4'
              name={'options'}
            />
          </InputGroup.Prepend>
          <FormControl type='text' value={k.col_6} readOnly />
        </InputGroup>
      </div>
    </div>
  );
};

export default Quiz;
