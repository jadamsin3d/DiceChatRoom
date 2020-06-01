import {
  LOGIN_SUCCESSFUL,
  LOGIN_FAILURE,
  FETCH_AUTH,
  CHANGE_PASSWORD_FIELD,
  CHANGE_EMAIL_FIELD
} from "./loginType";

const initialState = {
  checkingAuth: false,
  error: "",
  emailField: '',
  passwordField: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        checkingAuth: true,
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        checkingAuth: false,
        emailField: action.payload.email,
      };
    case LOGIN_FAILURE:
      return {
        checkingAuth: false,
        error: action.payload,
        emailField: "",
        passwordField: "",
      };
    case CHANGE_PASSWORD_FIELD:
      return {
        ...state,
        passwordField: action.payload,
      };
    case CHANGE_EMAIL_FIELD:
      return {
        ...state,
        emailField: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
