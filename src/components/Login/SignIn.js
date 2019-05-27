import React from "react";
import mylogo from "../../img/MyLogo-large.jpg";
import "./Login.scss";
import { Link, Redirect } from "react-router-dom";
//import mock from "./mock.json";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { username, password, loading, error } = this.state;

    if (username === "vuquangit" && password === "123")
      this.setState({ loged: true });
    else this.setState({ error: "Username or Password incorrect" });
  }

  render() {
    const { username, password, loading, error, loged } = this.state;
    return (
      <>
        {!loged ? (
          <div className="login">
            <div className="login__form">
              <div className="login__header">
                <img src={mylogo} className="mylogo" alt="" />
              </div>
              <div className="login__body">
                <div className="login__row">
                  <svg className="login__icon svg-icon">
                    <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
                  </svg>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="login__row">
                  <svg className="login__icon svg-icon">
                    <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
                  </svg>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="login__submit"
                  onClick={this.handleSubmit}
                >
                  Sign in
                </button>
                {error ? (
                  <div className={"alert alert-danger"}>{error}</div>
                ) : null}
                <p className="login__signup">
                  Don't have an account? <Link to="/SignUp">Sign up</Link>
                </p>
                <hr />
                <p>Or login with:</p>
                {/* <div
                  className="fb-login-button"
                  data-width=""
                  data-size="large"
                  data-button-type="continue_with"
                  data-auto-logout-link="true"
                  data-use-continue-as="true"
                />
                <div className="g-signin2" data-onsuccess="onSignIn" /> */}
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/ChangGio" />
        )}
      </>
    );
  }
}

export default SignIn;
