import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  SET_LOADING,
  LOGOUT,
} from '../types';

const intialState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        loading: false,
        error: null,
      };

    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuth: false,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
