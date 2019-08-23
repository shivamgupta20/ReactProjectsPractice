import { AUTH_START, AUTH_FAIL, AUTH_SUCCESS, AUTH_LOGOUT_START, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL } from './actionTypes';
import { FB_AUTH_START, FB_AUTH_SUCCESS, FB_AUTH_FAIL } from './actionTypes';
import { USER_REGISTER_START, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../actions/actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: AUTH_START,
        payload: {
            authenticated: false,
            error: false,
        }
    }
}
export const authFail = (err) => {
    return ({
        type: AUTH_FAIL,
        payload: {
            authenticated: false,
            error: err
        }
    })
}
export const authSuccess = (res) => {
    return ({
        type: AUTH_SUCCESS,
        payload: {
            data: res.data.profile,
            authenticated: true,
            error: false
        }
    })
}
export const authLogin = (email, pass) => {
    return (dispatch => {
        dispatch(authStart());
        axios.post('/api/login', { email: email, password: pass })
            .then(res => {
                dispatch(authSuccess(res));
            })
            .catch(err => {
                dispatch(authFail(err));
            })
    })
}

const authLogoutStart = () => {
    return ({
        type: AUTH_LOGOUT_START
    })
}
const authLogoutSuccess = (res) => {
    return ({
        type: AUTH_LOGOUT_SUCCESS,
        payload: res
    })
}
const authLogoutFail = (err) => {
    return ({
        type: AUTH_LOGOUT_FAIL,
        payload: err
    })
}
export const authLogout = () => {
    return (dispatch => {
        dispatch(authLogoutStart());
        axios.post('/api/logout')
            .then(res => {
                dispatch(authLogoutSuccess(res));
            })
            .catch(err => {
                dispatch(authLogoutFail(err));
            })
    })
}
export const fbLogin = (args) => {
    return (dispatch => () => {
        dispatch(authStart());
        axios.post(`/api/login/facebook`, args)
            .then(res => {
                dispatch({
                    type: FB_AUTH_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                dispatch({
                    type: FB_AUTH_FAIL,
                    payload: err
                })
            })
    })
}

const usrRegisterStart = () => {
    return ({ type: USER_REGISTER_START })
}

const usrRegistered = (data) => {
    return ({
        type: USER_REGISTER_SUCCESS,
        payload: data
    })
}
const usrRegisterFail = (err) => {
    return ({
        type: USER_REGISTER_FAIL,
        payload: err
    })
}
export const usrRegister = (data) => {
    return (dispatch => {
        dispatch(usrRegisterStart());
        axios.post('/api/register', data)
            .then(res => {
                dispatch(usrRegistered(res))
            })
            .catch(err => {
                dispatch(usrRegisterFail(err));
            })
    })
}