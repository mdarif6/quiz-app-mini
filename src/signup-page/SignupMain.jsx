import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import "./SignupPage.css";
export default function SignupMain() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  async function formSubmitHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", register);

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
              <label>Name</label>
              <input
                type="text"
                placeholder="Type your name"
                onChange={(e) =>
                  setRegister((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
              />
            </div>

            <div className="sm-input-text">
              <label>Email address</label>
              <input
                type="text"
                placeholder="xyz@email.com"
                onChange={(e) =>
                  setRegister((prevState) => {
                    return { ...prevState, email: e.target.value };
                  })
                }
              />
            </div>

            <div className="sm-input-text">
              <label>Password</label>
              <input
                type="password"
                placeholder="***************"
                onChange={(e) =>
                  setRegister((prevState) => {
                    return { ...prevState, password: e.target.value };
                  })
                }
              />
            </div>
            <div className="login-check"></div>
            <a href="#">
              <button
                className={
                  register.email.length > 0 && register.password.length > 0
                    ? "btn btn-primary"
                    : "btn btn-primary disabled-btn"
                }
                disabled={
                  register.email.length > 0 && register.password.length > 0
                    ? false
                    : true
                }
              >
                Create New Account
              </button>
            </a>

            <div className="login-bottom-text">
              <Link className="link-style" to="/login">
                Already have an Account <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
