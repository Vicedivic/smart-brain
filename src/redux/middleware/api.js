import { API_REQUEST } from "../actions/api";
import axios from "axios";

// This middleware care only for API calls.
const api = ({ dispatch }) => next => action => {
  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError, headers } = action.meta;
    let config = {
      method,
      url,
    };

    if (Object.keys(headers).length) {
      config.headers = headers;
    }
    if (action.payload && method === "GET") {
      config.params = action.payload;
    }
    axios
      .request(config)
      .then(response => dispatch({ type: onSuccess, payload: response.data }))
      .catch(error => dispatch({ type: onError, payload: error }));
  }
  return next(action);
};

export default api;
