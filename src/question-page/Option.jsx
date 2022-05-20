import React, { useState } from "react";
import { useQuiz } from "../context/quiz-context";

export default function Option({ option, question }) {
  const { state, dispatch } = useQuiz();
  function labelClickHandler() {
    dispatch({ type: "CLICKED", payload: question.questionSN });
    dispatch({
      type: "SELECTED",
      payload: { questNo: question.questionSN, optionNo: option.id },
    });
  }

  function colorCoding(option) {
    if (option.isSelected) {
      if (option.isCorrect) {
        return { backgroundColor: "green" };
      } else {
        return { backgroundColor: "red" };
      }
    } else {
      return {};
    }
  }

  return (
    <label
      style={colorCoding(option)}
      className="sm-option-label"
      onClick={() => {
        if (!question.isClicked) {
          labelClickHandler();
        }
      }}
    >
      <input className="sm-option" type="radio" name="option" />
      {option.answerText}
    </label>
  );
}
