import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
  SET_LOADING,
} from '../types';

export const loadUser = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('/api/auth');

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({ type: AUTH_ERROR, payload: err.response.data.msg });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.post('/api/auth', formData, config);

    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
  }
};

export const registerUser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.post('/api/users', formData, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
  }
};

export const clearErrors = () => ({ type: CLEAR_ERRORS });

export const setLoading = () => ({ type: SET_LOADING });
