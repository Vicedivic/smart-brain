import { UPDATE_USER } from "../actions/user";

export default (user = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default:
      return user;
  }
};
