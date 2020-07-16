import axios from 'axios';

import {
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
  SET_LOADING,
} from '../types';

export const getOrders = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/api/orders');
    console.log(res.data);

    dispatch({ type: GET_ORDERS_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ORDERS_FAIL, payload: err.response.data.msg });
  }
};

export const placeOrder = (order) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    setLoading();
    const data = await axios.post('/api/orders', order, config);
    console.log(order);
    dispatch({ type: PLACE_ORDER_SUCCESS, payload: data });
  } catch (err) {
    console.error(err);
    dispatch({ type: PLACE_ORDER_FAIL, payload: err.response.data.msg });
  }
};

export const setLoading = () => (dispatch) => dispatch({ type: SET_LOADING });
