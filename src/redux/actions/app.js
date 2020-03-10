const prefix = "[app]";
export const UPDATE_ROUTE = `${prefix} Update route`;
export const UPDATE_SIGNED_IN = `${prefix} Update signed in`;
export const HIDE_PROFILE_MODAL = `${prefix} Hide profile modal`;
export const SHOW_PROFILE_MODAL = `${prefix} Show profile modal`;

export const updateRoute = route => ({
  type: UPDATE_ROUTE,
  payload: route,
});

export const updateSignedIn = isSignedIn => ({
  type: UPDATE_SIGNED_IN,
  payload: isSignedIn
});

export const hideProfileModal = () => ({
  type: HIDE_PROFILE_MODAL,
});

export const showProfileModal = () => ({
  type: SHOW_PROFILE_MODAL,
});
