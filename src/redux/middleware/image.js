import { FETCH_FACE_LOCATIONS, FETCH_FACE_LOCATIONS_SUCCESS, FETCH_FACE_LOCATIONS_FAIL, updateFaceLocations } from "../actions/image";
import { apiRequest } from "../actions/api";

export const fetchFaceLocations = ({ dispatch }) => next => action => {
  if (action.type === FETCH_FACE_LOCATIONS) {
    dispatch(
      apiRequest(
        "POST",
        "http://localhost:3000/imageurl",
        action.payload,
        {
          "Content-Type": "application/json"
        },
        FETCH_FACE_LOCATIONS_SUCCESS,
        FETCH_FACE_LOCATIONS_FAIL
      )
    );
  }
  next(action);
};

export const fetchFaceLocationsSuccess = ({ dispatch }) => next => action => {
  if (action.type === FETCH_FACE_LOCATIONS_SUCCESS) {
    // TODO - Find a way to get the image.
    const faceLocations = calculateFaceLocations(action.payload, {});
    dispatch(updateFaceLocations(faceLocations));
  }
  next(action);
};

export const fetchFaceLocationsFail = ({ dispatch }) => next => action => {
  if (action.type === FETCH_FACE_LOCATIONS_FAIL) {
    // TODO - Fetch face locations fail.
  }
  next(action);
};

export default [fetchFaceLocations, fetchFaceLocationsSuccess];
