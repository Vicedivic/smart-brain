import { UPDATE_USER, LOGOUT } from "../actions/user";

const initialState = {
  id: "",
  name: "",
  email: "",
  entries: 0,
  joined: "",
  pet: "",
  age: ""
};

export default (user = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    case LOGOUT:
      return initialState;
    default:
      return user;
  }
};
