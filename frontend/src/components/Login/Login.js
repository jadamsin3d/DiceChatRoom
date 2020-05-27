import React from "react";
import {connect} from 'react-redux'
import '../Login/Login.css'
import axios from 'axios'
import {loginSuccessful, fetchUserRequest, loginFailure} from '../../redux/login/loginAction'


function Login({username="", checkingAuth, error, dispatch}) {

  const fetchAuth = () => {
    return function() {
      dispatch(fetchUserRequest())
      axios.get('/user/api/login')
        .then(response => {
          const user = response.data.user
          dispatch(loginSuccessful(user))
          // username
        }).catch( error =>{
          dispatch(loginFailure(error.message))
          // return error
        })
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>This is the Login</h1>
          <form className="loginForm">
            <label>Login</label>
            <input 
              type="text"
              placeholder="Enter Email Address or Username"
              required
            />
            <label>Password</label>
            <input 
              type="password"
              placeholder="Enter Password"
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
  const {username, checkingAuth, error} = state.login
  return {
    username: username,
    checkingAuth: checkingAuth,
    error: error
  }
}

export default connect(mapStateToProps)(Login);
