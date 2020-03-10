import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  updateUser,
  LOGOUT,
  AUTHENTICATE_WITH_TOKEN,
  AUTHENTICATE_WITH_TOKEN_SUCCESS,
  AUTHENTICATE_WITH_TOKEN_FAIL,
  fetchUser,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/user";
import { apiRequest } from "../actions/api";
import { updateSignedIn, updateRoute } from "../actions/app";

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
    window.sessionStorage.addItem("token", action.payload.session.token);
    dispatch(updateSignedIn(true));
    dispatch(updateUser(action.payload.user));
  }
  next(action);
};

export const loginFail = () => next => action => {
  if (action.type === LOGIN_FAIL) {
    // TODO - Login fail. Probably notify user with message.
  }
  next(action);
};

export const register = ({ dispatch }) => next => action => {
  if (action.type === REGISTER) {
    dispatch(
      apiRequest(
        "POST",
        action.payload,
        { "Content-Type": "application/json" },
        REGISTER_SUCCESS,
        REGISTER_FAIL
      )
    );
  }
  next(action);
};

export const registerSuccess = ({ dispatch }) => next => action => {
  if (action.type === REGISTER_SUCCESS) {
    const { user, session, } = action.payload;
    if (user.id) {
      window.sessionStorage.setItem("token", session.token);
      dispatch(updateUser(user));
      dispatch(updateSignedIn(true));
      dispatch(updateRoute("home"));
    }
  }
  next(action);
};

export const authenticateWithToken = ({ dispatch }) => next => action => {
  if (action.type === AUTHENTICATE_WITH_TOKEN) {
    dispatch(
      apiRequest(
        "POST",
        "http://localhost:3000/signin",
        null,
        { "Content-Type": "application/json" },
        AUTHENTICATE_WITH_TOKEN_SUCCESS,
        AUTHENTICATE_WITH_TOKEN_FAIL
      )
    );
  }
  next(action);
};

export const authenticateWithTokenSuccess = ({ dispatch }) => next => action => {
  if (
    action.type === AUTHENTICATE_WITH_TOKEN_SUCCESS &&
    action.payload &&
    action.payload.id
  ) {
    dispatch(fetchUser(action.payload.id));
  }
  next(action);
};

export const authenticateWithTokenFail = ({ dispatch }) => next => action => {
  if (action.type === AUTHENTICATE_WITH_TOKEN_FAIL) {
    // TODO - Authenticate with token fail. Probably just do nothing.
  }
  next(action);
};

export const fetchUser = ({ dispatch }) => next => action => {
  if (action.type === FETCH_USER) {
    dispatch(
      apiRequest(
        "GET",
        `http://localhost:3000/profile/${action.payload}`,
        null,
        {},
        FETCH_USER_SUCCESS,
        FETCH_USER_FAIL
      )
    );
  }
  next(action);
};

export const fetchUserSuccess = ({ dispatch }) => next => action => {
  if (
    action.type === FETCH_USER_SUCCESS &&
    action.payload &&
    action.payload.email
  ) {
    dispatch(updateUser(action.payload));
    dispatch(updateRoute("home"));
    dispatch(updateSignedIn(true));
  }
  next(action);
};

export const fetchUserFail = ({ dispatch }) => next => action => {
  if (action.type === FETCH_USER_FAIL) {
    // TODO - Fetch user fail. Probably notify user with message.
  }
  next(action);
};

export const logout = ({ dispatch }) => next => action => {
  if (action.type === LOGOUT) {
    // TODO - Remove token in Redis.
    window.sessionStorage.removeItem("token");
    dispatch(updateSignedIn(false));
  }
  next(action);
};

export default [login, loginSuccess, loginFail];
