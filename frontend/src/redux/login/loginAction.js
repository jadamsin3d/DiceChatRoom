import { LOGIN_SUCCESSFUL, LOGIN_FAILURE, FETCH_AUTH } from "./loginType";

export const loginSuccessful = (data) => {
  return {
    type: LOGIN_SUCCESSFUL,
    payload: {
      user: data.user,
    },
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_AUTH
  }
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

