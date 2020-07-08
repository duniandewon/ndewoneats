import axios from 'axios';

import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL, SET_LOADING } from '../types';

export const getProducts = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/api/products');

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.response.data.msg });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({ type: SET_LOADING });
};
