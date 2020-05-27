import { LOGIN_SUCCESSFUL, LOGIN_FAILURE, FETCH_AUTH } from "./loginType";


const initialState = {
  checkingAuth: false,
  username: "testing 1 2 3, test 1 2 3",
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        username: action.payload.email,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
        username: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
