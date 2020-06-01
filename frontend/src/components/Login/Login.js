import React from "react";
import { connect } from "react-redux";
import "../Login/Login.css";
import {
  loginSuccessfulAction,
  fetchUserRequestAction,
  loginFailureAction,
  changePasswordAction,
  changeEmailAction
} from "../../redux/login/loginAction";

function Login({email, checkingAuth, error, password, fetchUser, loginSuccessful, loginFailure, setEmail, setPassword}) {

  // const fetchAuth = ({dispatch}) => {
  //   return function () {
  //     const apibaseURL = "http://localhost:8080/user/api/login";
  //     dispatch(fetchUserRequest());
  //     axios
  //       .post(`${apibaseURL}?email=${email}&password=${password}`)
  //       .then((response) => {
  //         const user = response.data.user;
  //         dispatch(loginSuccessful(user));
  //         // username
  //       })
  //       .catch((error) => {
  //         dispatch(loginFailure(error.message));
  //         // return error
  //       });
  //   };
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>This is the Login</h1>
          <form className="loginForm">
            <label>Login</label>
            <input
              type="email"
              placeholder="Enter Email Address or Username"
              value={email}
              onChange={setEmail}
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={setPassword}
              required
            />
            <button type="Submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {emailField, checkingAuth, error, passwordField} = state.login;
  return {
    email: emailField,
    checkingAuth: checkingAuth,
    error: error,
    password: passwordField
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: fetchUserRequestAction,
    loginSuccessful: loginSuccessfulAction,
    loginFailure: loginFailureAction,
    setPassword: (e) => dispatch(changePasswordAction(e)),
    setEmail: (e) => dispatch(changeEmailAction(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
