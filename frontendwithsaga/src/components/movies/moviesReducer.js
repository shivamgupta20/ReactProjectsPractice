import {
    //GET_MOVIE, GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR, GET_MOVIES,
    GET_MOVIES_START, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR,
} from '../../store/actionTypes'

const initialState = {
    movieData: "",
    moviesData: "",
    loadMovies: false,
    movieserror: ""
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES_START:
            return ({
                ...state,
                loadMovies: true
            })
        case GET_MOVIES_SUCCESS:
            return ({
                ...state,
                moviesData: action.data,
                loadMovies: false
            })
        case GET_MOVIES_ERROR:
            return ({
                ...state,
                movieserror: action.data
            })
        // case GET_MOVIE:
        // case GET_MOVIE_START:
        // case GET_MOVIE_SUCCESS:
        // case GET_MOVIE_ERROR:

        default:
            return state
    }
}