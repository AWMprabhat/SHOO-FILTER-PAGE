import * as types from "./actionTypes";

const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        data: {
          isAuth: true,
          token: payload,
        },
        isLoading: false,
        isError: false,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
