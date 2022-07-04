//Create ActionCreator functions here
import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios({
    method: "POST",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE, payload: e }));
};

export { login };
