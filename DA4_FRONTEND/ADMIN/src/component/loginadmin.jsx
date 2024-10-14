import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div>
      <div id="wrapper">
        <form action="" id="form-login">
          <h1 className="form-heading">LOGIN</h1>
          <div className="form-group">
            <i className="far fa-user"></i>
            <input
              id="taikhoan"
              type="text"
              className="form-input"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <i className="fas fa-key"></i>
            <input
              id="matkkhau"
              type="password"
              className="form-input"
              placeholder="Password"
            />
            <div id="eye">
              <i className="far fa-eye"></i>
            </div>
          </div>
          <div>
            <label style={{ fontSize: "15px" }}>
              <input type="checkbox" value="checkedValue" />
              Remember me{" "}
            </label>
            <a className="miss-pass" href="../misspass.html">
              Forgot password
            </a>
          </div>
          <input type="submit" value="LOGIN" className="form-submit" />
          <div className="login.html">
            <div className="register">
              <p>
                Don't have an account?<a href="../signup.html"> Signup now</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
