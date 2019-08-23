import { GET_DEPS_SUCCESS, GET_DEPS_ERROR, GET_DEPS_START, POST_DEP_SUCCESS, POST_DEP_ERROR } from './actionTypes';
import { GET_DEP_SUCCESS, GET_DEP_ERROR, GET_DEP_START, PUT_DEP_START, PUT_DEP_SUCCESS, PUT_DEP_ERROR } from './actionTypes';


import axios from 'axios';

export const getDepsStart = () => {
    return {
        type: GET_DEPS_START
    }
}

export const getDepStart = () => {
    return {
        type: GET_DEP_START
    }
}

export const getDeps = (isAdmin) => {
    const url = isAdmin ? '/api/saving-deposits' : '/api/users/self/saving-deposits'
    return (dispatch => {
        dispatch(getDepsStart);
        axios.get(url)
            .then(res => {
                dispatch({
                    type: GET_DEPS_SUCCESS,
                    payload: res.data.savingDeposits
                });
            })
            .catch(err => {
                dispatch({
                    type: GET_DEPS_ERROR,
                    payload: err
                });
            })
    })
}

export const getDep = (isAdmin, depId) => {
    const url = isAdmin ? `/api/saving-deposits/${depId}` : `/api/users/self/saving-deposits/${depId}`
    return (dispatch => {
        dispatch(getDepStart);
        axios.get(url)
            .then(res => {
                // console.log(res.data)
                dispatch({
                    type: GET_DEP_SUCCESS,
                    payload: res.data.savingDeposit
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_DEP_ERROR,
                    payload: err
                })
            })
    }

    )
}
export const putDepStart = () => {
    return ({
        type: PUT_DEP_START
    })
}

export const putDep = (isAdmin, depData, depId) => {
    const url = isAdmin ? `/api/saving-deposits/${depId}` : `/api/users/self/saving-deposits/${depId}`
    return (dispatch => {
        dispatch(putDepStart)
        axios.put(url, depData)
            .then(res => {
                dispatch({
                    type: PUT_DEP_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                dispatch({
                    type: PUT_DEP_ERROR,
                    payload: err
                })
            })
    })
}

export const postDep = (depData) => {
    return (dispatch => {
        axios.post('/api/saving-deposits', depData)
            .then(res => {
                dispatch({
                    type: POST_DEP_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                dispatch({
                    type: POST_DEP_ERROR,
                    payload: err
                })
            })
    })
}

