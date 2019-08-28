import {
    GET_USRS_START,
    GET_USRS_SUCCESS,
    GET_USRS_ERROR,
    GET_USR_START,
    GET_USR_SUCCESS,
    GET_USR_ERROR,
    PUT_USR_START,
    PUT_USR_SUCCESS,
    PUT_USR_ERROR,
    POST_USR_START,
    POST_USR_SUCCESS,
    POST_USR_ERROR,

    CLR_USR
} from '../actions/actionTypes';
import axios from 'axios';


export const clrDep = () => {
    return ({
        type: CLR_USR

    })
}

export const getUsersStart = () => {
    return ({
        type: GET_USRS_START
    })
}
export const getUsersSuccess = (res) => {
    return ({
        type: GET_USRS_SUCCESS,
        payload: res
    })
}
export const getUsersError = (err) => {
    return ({
        type: GET_USRS_ERROR,
        payload: err
    })
}
export const getUsers = () => {
    return (dispatch => {
        dispatch(getUsersStart());
        axios.get('/api/users')
            .then(res => dispatch(getUsersSuccess(res)))
            .catch(err => dispatch(getUsersError(err)))
    })
}