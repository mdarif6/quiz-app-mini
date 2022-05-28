import React from "react";
import { Link } from "react-router-dom";
import "./RulesPage.css";
export default function RulesMain() {
  return (
    <div className="sm-main-wrapper">
      <div className="sm-rule-content">
        <div className="sm-rules-heading">Read out before begin the Quiz:</div>
        <ul className="unorderd-list square-list">
          <li>You can not go back to previous question.</li>
          <li>You can select only one question at one time.</li>
          <li>Each questions have same weightage of 1 mark.</li>
          <li>You will get quiz score after attempting all questions.</li>
          <li>Once you select an option, you can not change that.</li>
        </ul>
        <Link to="/question">
          <button className="btn">Let's Start</button>
        </Link>
      </div>
    </div>
  );
}
