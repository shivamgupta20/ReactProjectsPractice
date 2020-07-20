import {
    AUTH_START, AUTH_FAIL, AUTH_SUCCESS,
    // AUTH_LOGOUT_START, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL 
} from '../../store/actionTypes';

const initialState = {
    userData: "",
    userReg: "",
    authenticated: false,
    error: null,
    loadAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                authenticated: false,
                error: null,
                loadAuth: true
            }
        case AUTH_FAIL:
            return {
                ...state,
                authenticated: false,
                error: action.userData,
                loadAuth: false
            }

        case AUTH_SUCCESS:
            return {
                ...state,
                userData: action.userData,
                authenticated: true,
                loadAuth: false
            }
        default:
            return state;
    }
}