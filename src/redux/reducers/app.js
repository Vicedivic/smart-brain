import { UPDATE_ROUTE, UPDATE_SIGNED_IN, SHOW_PROFILE_MODAL, HIDE_PROFILE_MODAL } from "../actions/app";

const initialState = {
  route: "signin",
  isSignedIn: false,
  isProfileModalOpen: false,
};

export default (app = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROUTE:
      return {
        ...app,
        route: action.payload,
      };
    case UPDATE_SIGNED_IN:
      return {
        ...app,
        isSignedIn: action.payload,
      };
    case SHOW_PROFILE_MODAL:
      return {
        ...app,
        isProfileModalOpen: true,
      };
    case HIDE_PROFILE_MODAL:
      return {
        ...app,
        isProfileModalOpen: false,
      };
    default:
      return app;
  }
};
