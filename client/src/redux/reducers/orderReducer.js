import {
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
  SET_LOADING,
} from '../types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };

    case GET_ORDERS_FAIL:
    case PLACE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
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
