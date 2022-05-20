import React from "react";
import "./Header.css";
import logo from "../assets/images/logo1.PNG";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="sm-header">
      <div className="sm-logo-and-heading">
        <div className="sm-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="sm-heading">
          <span>Simple</span> Minds
        </div>
      </div>
      <div className="sm-header-icons">
        <Link to="/login">
          <i class="fa-solid fa-user"></i>
        </Link>
      </div>
    </div>
  );
}
