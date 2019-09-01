import { GET_MOVIES_START, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from './actionTypes';
import { GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR } from './actionTypes';
import { POST_MOVIE_START, POST_MOVIE_SUCCESS, POST_MOVIE_ERROR } from './actionTypes';
import { PUT_MOVIE_START, PUT_MOVIE_SUCCESS, PUT_MOVIE_ERROR } from './actionTypes';
import axios from 'axios';

export const getMovies = () => {
    return (dispatch => {
        dispatch({ type: GET_MOVIES_START });
        axios.get('/api/movies')//, { responseType: 'blob' })
            .then(res => {
                // console.log(res);
                dispatch({
                    type: GET_MOVIES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_MOVIES_ERROR,
                    payload: err
                })
            });
    })
}

export const getMovie = (id) => {
    return (dispatch => {
        dispatch({
            type: GET_MOVIE_START
        })
        axios.get(`/api/movies/${id}`)
            .then(res => {
                dispatch({
                    type: GET_MOVIE_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_MOVIE_ERROR,
                    payload: err
                })
            })

    })
}

export const postMovie = (data) => {
    return (dispatch => {
        dispatch({ type: POST_MOVIE_START });
        axios.post('/api/movies', data)
            .then(res => {
                dispatch({
                    type: POST_MOVIE_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                dispatch({
                    type: POST_MOVIE_ERROR,
                    payload: err
                })
            })
    });
}

const putMovieStart = () => {
    return ({
        type: PUT_MOVIE_START
    })
}

export const putMovie = (data, id) => {
    return (dispatch => {
        // console.log(data);
        dispatch(putMovieStart);
        axios.put(`/api/movies/${id}`, data)
            .then(res => {
                // console.log(res);
                dispatch({
                    type: PUT_MOVIE_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                // console.log(err);
                dispatch({
                    type: PUT_MOVIE_ERROR,
                    payload: err
                })
            })
    })
}

export const putMovieImage = (Image, id) => {
    return (dispatch => {
        dispatch({ type: PUT_MOVIE_START })
        // console.log(Image, id);
        axios.put(`/api/movies/${id}`, Image)
            .then(res => {
                // console.log(res);
                dispatch({
                    type: PUT_MOVIE_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                // console.log(err);
                dispatch({
                    type: PUT_MOVIE_ERROR,
                    payload: err
                })
            })
    })
}

export const delMovie = (id) => {
    return (console.log(`Record with ${id} deleted.`));
}