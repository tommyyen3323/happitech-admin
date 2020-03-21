import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import usersReducer from './users';

export default combineReducers({
  router: routerReducer,
  auth: authReducer,
  users: usersReducer
});