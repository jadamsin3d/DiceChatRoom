import { LOGIN_SUCCESSFUL, LOGIN_FAILURE, FETCH_AUTH, CHANGE_EMAIL_FIELD, CHANGE_PASSWORD_FIELD } from "./loginType";

export const loginSuccessfulAction = (data) => {
  return {
    type: LOGIN_SUCCESSFUL
  };
};

export const fetchUserRequestAction = () => {
  return {
    type: FETCH_AUTH
  }
}

export const loginFailureAction = (error) => {
  return {
    type: LOGIN_FAILURE
  }
}

export const changePasswordAction = (e) => {
  return {
    type: CHANGE_PASSWORD_FIELD,
    payload: e.target.value
  }
}

export const changeEmailAction = (e) => {
  return {
    type: CHANGE_EMAIL_FIELD,
    payload: e.target.value
  }
}
