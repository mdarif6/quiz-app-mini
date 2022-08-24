import React from "react";
import { Link } from "react-router-dom";
import img365 from "../assets/images/365img.png";
import { useAuth } from "../context/auth-context";
import "./HomeMain.css";

export default function HomeMain() {
  const { state, dispatch } = useAuth();
  return (
    <div className="sm-main">
      <div className="sm-categories">
        <div className="sm-categ-card">
          <div className="sm-card-img">
            <img src={img365} alt="" />
          </div>
          <div className="sm-card-details">
            <p className="sm-title">Office 365</p>
            <p>Take this quiz to test yourself</p>
            <p>5 questions</p>

            {state.isAuthenticated ? (
              <div className="sm-card-button">
                <Link to="/rules">
                  <button className="btn btn-primary">Play Now</button>
                </Link>
              </div>
            ) : (
              <div className="sm-card-button">
                <Link to="/login">
                  <button className="btn btn-primary">Play Now</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
