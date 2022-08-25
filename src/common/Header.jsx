import React from "react";
import "./Header.css";
import logo from "../assets/images/logo1.PNG";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
export default function Header() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  function logoutHandler() {
    localStorage.removeItem("authToken");
    dispatch({ type: "SET_AUTH", payload: false });
    navigate("/login");
    window.location = "/";
  }

  function logoClickHandle() {
    window.location = "/";
  }
  return (
    <div className="sm-header">
      <div className="sm-logo-and-heading">
        <div className="sm-logo" onClick={logoClickHandle}>
          <img src={logo} alt="smlogo" />
        </div>
        <div className="sm-heading">
          <span>Simple</span> Minds
        </div>
      </div>
      <div className="sm-header-icons">
        {state.isAuthenticated ? (
          <i
            className="fa-solid fa-right-from-bracket"
            onClick={logoutHandler}
          ></i>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
