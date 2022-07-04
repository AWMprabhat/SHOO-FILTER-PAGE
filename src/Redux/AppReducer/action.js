import axios from "axios";
import * as types from "./actionTypes";

const getShoes = (params) => (dispatch) => {
  dispatch({ type: types.GET_SHOES_DATA_REQUEST });

  return axios
    .get("/shoes", params)
    .then((r) =>
      dispatch({ type: types.GET_SHOES_DATA_SUCCESS, payload: r.data })
    )
    .catch((e) => dispatch({ type: types.GET_SHOES_DATA_FAILURE, payload: e }));
};

// const filterShoes = (filters) => (dispatch) => {
//   dispatch({ type: types.FILTER_SHOES, payload: filters });
// };

export { getShoes };
