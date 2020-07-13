import axios from 'axios';

import {
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
  SET_LOADING,
} from '../types';

// @TODO: create getOrders

export const placeOrder = (order) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    setLoading();
    // const data = await axios.post('/api/orders', order, config);
    dispatch({ type: PLACE_ORDER_SUCCESS, payload: order });
  } catch (err) {
    console.error(err);
    dispatch({ type: PLACE_ORDER_FAIL, payload: err.response.data.msg });
  }
};

const setLoading = () => (dispatch) => dispatch({ type: SET_LOADING });
