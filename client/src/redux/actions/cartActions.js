import {
  ADD_TO_CART,
  TOGGLE_AMOUNT,
  REMOVE_FROM_CART,
  GET_SUBTOTALS,
  SET_SHIPPING,
  CLEAR_CART,
} from '../types';

export const addToCart = (product) => (dispatch) =>
  dispatch({ type: ADD_TO_CART, payload: product });

export const removeFromCart = (id) => (dispatch) =>
  dispatch({ type: REMOVE_FROM_CART, payload: id });

export const toggleAmount = (id, toggle) => (dispatch) =>
  dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } });

export const getSubtotals = () => (dispatch) =>
  dispatch({ type: GET_SUBTOTALS });

export const setShippingAddress = (address) => (dispatch) =>
  dispatch({ type: SET_SHIPPING, payload: address });

export const clearCart = () => (dispatch) => dispatch({ type: CLEAR_CART });
