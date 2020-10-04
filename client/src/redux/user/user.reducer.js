import { UserTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isAuthenticated: false,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.GET_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UserTypes.GET_LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...action.payload,
        },
        isAuthenticated: true,
        loading: false,
      };
    case UserTypes.GET_LOGIN_REQUEST_FAILED:
      return {
        ...state,
        currentUser: null,
        loading: false,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default userReducer;
