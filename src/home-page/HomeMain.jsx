import React from "react";
import { Link } from "react-router-dom";
import img365 from "../assets/images/365img.png";
import imgsilicon from "../assets/images/silicon.jpg";
import "./HomeMain.css";

export default function HomeMain() {
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
            <div className="sm-card-button">
              <Link to="/rules">
                <button className="btn btn-primary">Play Now</button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="sm-categ-card">
          <div className="sm-card-img">
            <img src={imgsilicon} alt="" />
          </div>
          <div className="sm-card-details">
            <p className="sm-title">Office 365</p>
            <p>Take this quiz to test yourself</p>
            <p>5 questions</p>
            <div className="sm-card-button">
              <Link to="/rules">
                <button className="btn btn-primary">Play Now</button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
