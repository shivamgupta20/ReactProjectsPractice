import { combineReducers } from 'redux';
import { authReducer } from '../components/login/loginReducer';
import { moviesReducer } from '../components/movies/moviesReducer';
import { cImagesReducer } from '../components/movies/cImagesReducer';

export const rootReducer = combineReducers({
    authReducer: authReducer,
    moviesReducer: moviesReducer,
    cImagesReducer: cImagesReducer

})