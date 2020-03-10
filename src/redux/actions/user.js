const prefix = "[user]";
export const REGISTER = `${prefix} Register`;
export const LOGIN = `${prefix} Login`;
export const LOGIN_SUCCESS = `${prefix} Login success`;
export const LOGIN_FAIL = `${prefix} Login fail`;
export const AUTHENTICATE_WITH_TOKEN = `${prefix} Authenticate user with token`;
export const AUTHENTICATE_WITH_TOKEN_SUCCESS = `${prefix} Authenticate with token success`;
export const AUTHENTICATE_WITH_TOKEN_FAIL = `${prefix} Authenticate with token fail`;
export const REGISTER = `${prefix} Register`;
export const REGISTER_SUCCESS = `${prefix} Register success`;
export const REGISTER_FAIL = `${prefix} Register fail`;
export const LOGOUT = `${prefix} Logout`;
export const FETCH_USER = `${prefix} Fetch user`;
export const FETCH_USER_SUCCESS = `${prefix} Fetch user success`;
export const FETCH_USER_FAIL = `${prefix} Fetch user fail`;
export const UPDATE_USER = `${prefix} Update`;

export const register = userInfo => ({
  type: REGISTER,
  payload: userInfo,
});

export const login = loginData => ({
  type: LOGIN,
  payload: loginData,
});

export const authenticateWithToken = () => ({
  type: AUTHENTICATE_WITH_TOKEN,
});

export const logout = () => ({
  type: LOGOUT
});

export const fetchUser = userId => ({
  type: FETCH_USER,
  payload: userId,
});

export const updateUser = userData => ({
  type: UPDATE_USER,
  payload: userData,
});
