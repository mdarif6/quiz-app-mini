import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import errorimage from "../assets/images/Error 404.png";
export default function PageNotFoundMain() {
  return (
    <div>
      <div className="quiz-error-page">
        <img src={errorimage} alt="error-image" />
      </div>
      <div className="quiz-error-msg">
        <h3>Sorry, this page isn't available</h3>
        <small>
          The link you followed may be broken, or the page may have been
          removed.
        </small>

        <Link className="link-style" to="/">
          <p className="main-heading">
            Go back to <span>Simple </span>Minds
          </p>
        </Link>
      </div>
    </div>
  );
}
