import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, SET_LOADING } from '../types';

const initialState = {
  products: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
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
