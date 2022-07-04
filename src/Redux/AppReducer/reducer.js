import * as types from "./actionTypes";

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SHOES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_SHOES_DATA_SUCCESS:
      return {
        ...state,
        shoes: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_SHOES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
