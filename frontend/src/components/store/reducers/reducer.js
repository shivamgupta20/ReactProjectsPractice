import { combineReducers } from 'redux';
import depositReducer from './depositReducer';
import authReducer from './authReducers';
import userReducer from './userReducer';
import movieReducer from './moviesReducer';
import CImagesReducer from './carouselImagesReducer';
import ContactReducer from './contactReducer';

export default combineReducers({
    auth: authReducer,
    deposits: depositReducer,
    user: userReducer,
    movies: movieReducer,
    carouselImage: CImagesReducer,
    contacts: ContactReducer
});