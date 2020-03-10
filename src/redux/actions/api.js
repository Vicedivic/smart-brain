export const API_REQUEST = `Api request`;

export const apiRequest = (method, url, body, headers, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError, headers }
});