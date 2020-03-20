import { combineReducers } from 'redux';
import { authReducer } from '../components/login/loginReducer';

export const rootReducer = combineReducers({
    authReducer: authReducer


})