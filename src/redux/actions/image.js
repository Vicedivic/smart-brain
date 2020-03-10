const prefix = "[image]";
export const UPDATE_IMAGE_URL = `${prefix} Update image url`;
export const UPDATE_FACE_LOCATIONS = `${prefix} Update face boxes`;
export const FETCH_FACE_LOCATIONS = `${prefix} Fetch face locations`;
export const FETCH_FACE_LOCATIONS_SUCCESS = `${prefix} Fetch face locations success`;
export const FETCH_FACE_LOCATIONS_FAIL = `${prefix} Fetch face locations fail`;

export const updateImageUrl = imageUrl => ({
  type: UPDATE_IMAGE_URL,
  payload: imageUrl,
});

export const updateFaceLocations = faceLocations => ({
  type: UPDATE_FACE_LOCATIONS,
  payload: faceLocations,
});

export const fetchFaceLocations = imageUrl => ({
  type: FETCH_FACE_LOCATIONS,
  payload: imageUrl,
});
