import { UPDATE_IMAGE_URL, UPDATE_FACE_LOCATIONS } from "../actions/image";

const initialState = {
  imageUrl: "",
  faceLocations: "",
};

export default (image = initialState, action) => {
  switch (action.type) {
    case UPDATE_IMAGE_URL:
      return {
        ...image,
        imageUrl: action.payload,
      };
    case UPDATE_FACE_LOCATIONS:
      return {
        ...image,
        faceLocations: action.payload,
      };
    default:
      return image;
  }
};
