import { combineReducers } from 'redux';

import authReducer from './authReducer';
// cart reducer
// order reducer

export default combineReducers({
  auth: authReducer,
});
