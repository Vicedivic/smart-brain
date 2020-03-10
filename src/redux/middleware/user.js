import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, updateUser } from "../actions/user";
import { apiRequest } from "../actions/api";

export const login = ({ dispatch }) => next => action => {
  if (action.type === LOGIN) {
    dispatch(
      apiRequest(
        "POST",
        "http://localhost:3000/signin",
        action.payload,
        { "Content-Type": "application/json" },
        LOGIN_SUCCESS,
        LOGIN_FAIL
      )
    );
  }
  next(action);
};

export const loginSuccess = ({ dispatch }) => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    dispatch(updateUser(action.payload));
  }
  next(action);
};

export const loginFail = () => next => action => {
  if (action.type === LOGIN_FAIL) {
    // TODO - Login fail.
  }
  next(action);
};

export default [login, loginSuccess, loginFail];
