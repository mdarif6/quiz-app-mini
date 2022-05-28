import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/quiz-context";
import "./ScorePage.css";
export default function ScoreMain() {
  const { state, dispatch } = useQuiz();

  let scoreOfQuiz = state.quizData1.reduce((acc, current) => {
    for (let option of current.answerOptions) {
      if (option.isSelected && option.isCorrect) {
        acc++;
      }
    }
    return acc;
  }, 0);

  function colorCoding(option) {
    if (option.isSelected) {
      if (option.isCorrect) {
        return { backgroundColor: "green" };
      } else {
        return { backgroundColor: "red" };
      }
    } else if (option.isCorrect) {
      return { backgroundColor: "green" };
    }
  }

  return (
    <div>
      <div className="sm-question-main">
        <div className="sm-question-details">
          <div className="sm-result-status">
            <div className="sm-result-heading"> </div>
            <div className="sm-score-status">
              Your Score :
              <p style={{ color: "green", fontSize: "1.5rem" }}>
                {scoreOfQuiz}
              </p>
            </div>
            <div className="blank-div"></div>
          </div>
        </div>

        {state.quizData1.map((quizQuestion) => {
          return (
            <div className="sm-question-details" key={quizQuestion.questionSN}>
              <div className="sm-question">
                <p>Question: {quizQuestion.questionSN}</p>
                <p>{quizQuestion.questionHeading}</p>
              </div>
              <div className="sm-question-options">
                {quizQuestion.answerOptions.map((options) => {
                  return (
                    <label
                      className="sm-option-label"
                      key={options.id}
                      style={colorCoding(options)}
                    >
                      <input className="sm-option" type="radio" name="option" />
                      {options.answerText}
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Link className="link-style" to="/">
        <button className="sm-back-btn">Try Again</button>
      </Link>
    </div>
  );
}
