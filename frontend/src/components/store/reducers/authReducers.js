import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT_START, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL } from '../actions/actionTypes';
import { FB_AUTH_START, FB_AUTH_SUCCESS, FB_AUTH_FAIL } from '../actions/actionTypes';
import { USR_PROFILE_UPD, USER_REGISTER_START, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../actions/actionTypes';

const initialState = {
    userData: "",
    userReg: "",
    authenticated: false,
    error: null,
    loadAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                userData: "",
                authenticated: action.payload.authenticated,
                error: null,
                loadAuth: true
            }
        case USR_PROFILE_UPD:
            return {
                ...state,
                userData: action.payload,
                authenticated: true,
                error: null,
                loadAuth: false
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                authenticated: true,
                error: null,
                loadAuth: false
            }
        case AUTH_FAIL:
            return {
                ...state,
                userData: "",
                authenticated: false,
                error: action.payload.error,
                loadAuth: false
            }
        case AUTH_LOGOUT_START:
            return {
                ...state,
                loadAuth: true
            }

        case AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                authenticated: false,
                loadAuth: false
            }

        case AUTH_LOGOUT_FAIL:
            return {
                ...state,
                loadAuth: false,
                error: action.payload.error
            }
        case FB_AUTH_START:
            return {
                ...state,
                loadAuth: true
            }
        case FB_AUTH_SUCCESS:
            return {
                ...state,
                loadAuth: false,
                userData: action.payload
            }
        case FB_AUTH_FAIL:
            return {
                ...state,
                loadAuth: false,
                error: action.payload.error
            }
        case USER_REGISTER_START:
            return {
                ...state,
                loadUsrReg: true
            }

        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loadUsrReg: false,
                userReg: action.payload
            }

        case USER_REGISTER_FAIL:
            return {
                ...state,
                loadUsrReg: false,
                userReg: action.payload
            }
        default:
            return state;

    }
}

export default authReducer;