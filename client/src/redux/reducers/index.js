import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productReducer from './productReducer';
// cart reducer
// order reducer

export default combineReducers({
  auth: authReducer,
  products: productReducer,
});
