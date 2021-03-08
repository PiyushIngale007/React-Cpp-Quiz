import React from 'react';
import './QuizResult.css';

const QuizResult = (props) => {
  document.getElementById('button').style.display = 'none';
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
                <p id='answer'>Answer : {Question.col_7}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  let resetQuiz = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <div>
        <p id='score'>Your Score is: {props.scorecard.score}</p>
      </div>
      <div>{answerDisplay}</div>
      <div>
        <button id='reset' onClick={resetQuiz}>
          Reset Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
