import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import "./SignupPage.css";
export default function SignupMain() {
  const [register, setRegister] = useState({ email: "", password: "" });
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  async function formSubmitHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", register);
      console.log("response arif", response);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("authToken", response.data.encodedToken);
        navigate("/");
        dispatch({ type: "SET_AUTH", payload: true });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="sm-login-main">
      <div className="sm-login-window">
        <div className="sm-login-container">
          <h2>Signup</h2>
          <form action="inputs" onSubmit={formSubmitHandler}>
            <div className="sm-input-text">
              <label>Email address</label>
              <input type="text" placeholder="xyz@email.com" />
            </div>

            <div className="sm-input-text">
              <label>Password</label>
              <input type="password" placeholder="***************" />
            </div>
            <div className="login-check">
              {/* <div className="login-check-label">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  value="remember"
                />
                <label for="consent">Remember me</label>
              </div> */}
            </div>
            <a href="#">
              <button className="btn btn-primary">
                I accept all terms and condition
              </button>
            </a>

            <div className="login-bottom-text">
              <Link to="login">
                Already have an Account <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
