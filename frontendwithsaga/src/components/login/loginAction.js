import { AUTH_START, AUTH_FAIL, AUTH_SUCCESS, AUTH_LOGOUT_START, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL } from '../../store/actionTypes';
import axios from 'axios';

const authStart = () => {
    console.log("1")
    return {
        type: AUTH_START,
        payload: {
            authenticated: false,
            error: false,
        }
    }
}
const authFail = (err) => {
    console.log("2")
    return ({
        type: AUTH_FAIL,
        payload: {
            authenticated: false,
            error: err
        }
    })
}
const authSuccess = (res) => {
    console.log("3")
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
    console.log("4", email, pass)
    return ({
        type: 'AUTH_LOGIN',
        data: { email: email, password: pass }
    })
    // return (dispatch => {
    //     dispatch(authStart());
    //     axios.post('/api/login', { email: email, password: pass })
    //         .then(res => {
    //             dispatch(authSuccess(res));
    //         })
    //         .catch(err => {
    //             dispatch(authFail(err));
    //         })
    // })
}