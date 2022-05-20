import React from "react";
import { Link } from "react-router-dom";
import "./RulesPage.css";
export default function RulesMain() {
  return (
    <div className="sm-main-wrapper">
      <div className="sm-rule-content">
        <div className="sm-rules-heading">
          Take a look before begin the Quiz
        </div>
        <ul className="unorderd-list square-list">
          <li>You can not go to previous question.</li>
          <li>You have to select only one question at one time.</li>
          <li>You have to answer within 60 seconds.</li>
          <li>Each questions have same weightage of 1 mark.</li>
        </ul>
        <Link to="/question">
          <button className="btn">Let's Start</button>
        </Link>
      </div>
    </div>
  );
}
