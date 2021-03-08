import React from 'react';
import './Quiz.css';
import { InputGroup, FormControl } from 'react-bootstrap';

const Quiz = (props) => {
  let Q = props.Ques.QuestionNumber;
  let k = props.Ques.Questions[Q];
  let C_Flag = props.Ques.checked;
  const Checker = (id) => {
    C_Flag = false;
    const SelectedAnswer = document.getElementById(id + 1).value;
    document.getElementById(id).checked = true;
    if (document.getElementById(id).checked) {
      if (SelectedAnswer === k.col_7) {
        C_Flag = true;
      }
      props.Ques.checked = C_Flag;
      props.Ques.id = id;
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
        <FormControl
          id={iD + 1}
          onClick={() => Checker(iD)}
          type='text'
          value={column}
          readOnly
        />
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
