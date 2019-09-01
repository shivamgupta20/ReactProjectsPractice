import { GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR } from '../actions/actionTypes';
import { GET_MOVIES_START, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../actions/actionTypes';
import { POST_MOVIE_START, POST_MOVIE_SUCCESS, POST_MOVIE_ERROR } from '../actions/actionTypes';
import { PUT_MOVIE_START, PUT_MOVIE_SUCCESS, PUT_MOVIE_ERROR } from '../actions/actionTypes';

const initialState = {
    MoviesData: "",
    movieData: "",
    loadMovie: false,
    error: ""
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_START:
            return {
                ...state,
                loadMovie: true
            };
        case GET_MOVIES_START:
            return {
                ...state,
                loadMovie: true
            };

        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                loadMovie: false,
                movieData: action.payload
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                loadMovie: false,
                MoviesData: action.payload
            };

        case GET_MOVIE_ERROR:
            return {
                ...state,
                loadMovie: false,
                error: action.payload
            };
        case GET_MOVIES_ERROR:
            return {
                ...state,
                loadMovie: false,
                error: action.payload
            };

        case POST_MOVIE_START:
            return {
                ...state,
                loadMovie: true
            }
        case POST_MOVIE_SUCCESS:
            return {
                ...state,
                loadMovie: false,
                MoviesData: action.payload
            }
        case POST_MOVIE_ERROR:
            return {
                ...state,
                loadMovie: false,
                error: action.payload
            }
        case PUT_MOVIE_START:
            return {
                ...state,
                loadMovie: true
            }
        case PUT_MOVIE_SUCCESS:
            return {
                ...state,
                loadMovie: false,
                MovieData: action.payload
            }
        case PUT_MOVIE_ERROR:
            return {
                ...state,
                loadMovie: false,
                movieData: action.payload
            }

        default:
            return state;
    }
}

export default moviesReducer;