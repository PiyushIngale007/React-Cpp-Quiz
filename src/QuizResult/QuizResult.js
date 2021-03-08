import React from 'react';
import './QuizResult.css';
const QuizResult = (props) => {
  let answerDisplay = (
    <div>
      {props.scorecard.Questions.map((Question, index) => {
        return (
          <div key={index + 100}>
            <div className='card'>
              <div className='container'>
                <h4>
                  <b>
                    Question {index + 1}: {Question.col_2}
                  </b>
                </h4>
                <p>Answer : {Question.col_7}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      Your Score is: {props.scorecard.score}
      <div>{answerDisplay}</div>
    </div>
  );
};

export default QuizResult;
