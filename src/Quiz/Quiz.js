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

  let OptionsComponent = (iD, val, column) => {
    return (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Radio
            onClick={() => Checker(iD)}
            id={iD}
            value={val}
            name={'options'}
          />
        </InputGroup.Prepend>
        <FormControl type='text' value={column} readOnly />
      </InputGroup>
    );
  };
  return (
    <div className='quiz'>
      <div className='question'>
        <p>
          Question {Q + 1}:{k.col_2}{' '}
        </p>
      </div>
      <div className='options'>
        {OptionsComponent('one', '1', k.col_3)}
        {OptionsComponent('two', '2', k.col_4)}
        {OptionsComponent('three', '3', k.col_5)}
        {OptionsComponent('four', '4', k.col_6)}
      </div>
    </div>
  );
};

export default Quiz;
