import { combineReducers } from 'redux';
import depositReducer from './depositReducer';
import authReducer from './authReducers';
import userReducer from './userReducer';
import movieReducer from './moviesReducer';

export default combineReducers({
    auth: authReducer,
    deposits: depositReducer,
    user: userReducer,
    movies: movieReducer
});