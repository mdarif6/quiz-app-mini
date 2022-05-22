import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/quiz-context";
import Option from "./Option";
// import { uuid } from "uuidv4";
import "./Question.css";

export default function QuestionMain() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(100);
  const { state, dispatch } = useQuiz();

  function nextClickHandler() {
    if (state.quizData1.length > currentQuestion + 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  console.log(state.quizData1.length - 1, currentQuestion);
  return (
    <div className="sm-question-main">
      <div className="sm-question-details">
        <div className="sm-question">
          <p>Q.N. : {state.quizData1[currentQuestion].questionSN}</p>
          <p>{state.quizData1[currentQuestion].questionHeading}</p>
        </div>
        <div className="sm-question-options">
          {state.quizData1[currentQuestion].answerOptions.map((option) => {
            return (
              <Option
                key={option.id}
                option={option}
                question={state.quizData1[currentQuestion]}
              />
            );
          })}

          {state.quizData1.length - 1 === currentQuestion ? (
            <Link to="/score">
              <button className="sm-result-btn">Result</button>
            </Link>
          ) : (
            <button
              disabled={!state.quizData1[currentQuestion].isClicked}
              className="sm-next-btn"
              onClick={nextClickHandler}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
