import { combineReducers } from 'redux';

import authReducer from './authReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
// order reducer

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
});
