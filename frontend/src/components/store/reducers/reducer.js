import { combineReducers } from 'redux';
import depositReducer from './depositReducer';
import authReducer from './authReducers';
import userReducer from './userReducer';

export default combineReducers({
    auth: authReducer,
    deposits: depositReducer,
    user: userReducer
});