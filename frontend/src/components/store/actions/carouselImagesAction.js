import { GET_CIMAGES_START, GET_CIMAGES_SUCCESS, GET_CIMAGES_ERROR } from './actionTypes';
import { POST_CIMAGES_START, POST_CIMAGES_SUCCESS, POST_CIMAGES_ERROR } from './actionTypes';
import axios from 'axios';

const postCImagesStart = () => {
    return ({
        type: POST_CIMAGES_START
    })
}

const postCImagesSuccess = (res) => {
    return ({
        type: POST_CIMAGES_SUCCESS,
        payload: res
    })
}

const postCImagesError = (err) => {
    return ({
        type: POST_CIMAGES_ERROR,
        payload: err
    })
}

const getCImagesStart = () => {
    return ({
        type: GET_CIMAGES_START
    })
}

const getCImagesSuccess = (res) => {
    return ({
        type: GET_CIMAGES_SUCCESS,
        payload: res
    })
}

const getCImagesError = (err) => {
    return ({
        type: GET_CIMAGES_ERROR,
        payload: err
    })
}

export const postCImages = (data) => {
    return (dispatch => {
        dispatch(postCImagesStart());
        // console.log(data);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post('/api/cimages', data)
            .then(res => {
                dispatch(postCImagesSuccess(res));
            })
            .catch(err => {
                dispatch(postCImagesError(err));
            })
    })
}

export const getCImages = (category) => //(dispatch) => 
{
    return (dispatch => {
        dispatch(getCImagesStart());
        axios.get('/api/cimages', { category: category })
            .then(res => {
                // console.log(res);
                dispatch(getCImagesSuccess(res));
            })
            .catch(err => {
                dispatch(getCImagesError(err));
            })
    })
}

