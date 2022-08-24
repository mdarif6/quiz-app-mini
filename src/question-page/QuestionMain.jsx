import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../context/quiz-context";
import Option from "./Option";
// import { uuid } from "uuidv4";
import "./Question.css";

export default function QuestionMain() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(100);
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();

  function nextClickHandler() {
    if (state.quizData1.length > currentQuestion + 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function navigationHandle() {
    navigate("/score");
  }
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
            <button
              disabled={!state.quizData1[currentQuestion].isClicked}
              className={
                !state.quizData1[currentQuestion].isClicked
                  ? "sm-result-btn disabled-btn"
                  : "sm-result-btn"
              }
              onClick={navigationHandle}
            >
              Result
            </button>
          ) : (
            <button
              disabled={!state.quizData1[currentQuestion].isClicked}
              className={
                !state.quizData1[currentQuestion].isClicked
                  ? "sm-next-btn disabled-btn"
                  : "sm-next-btn "
              }
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
