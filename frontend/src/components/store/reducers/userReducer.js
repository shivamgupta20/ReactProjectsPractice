
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
    POST_USR_ERROR
} from '../actions/actionTypes';

const initialState = {
    usersData: "",
    error: "",
    loadUsrReg: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USRS_START:
            return ({
                ...state,
                loadUsr: true
            })

        case GET_USRS_SUCCESS:
            // console.log(action.payload)
            return ({
                ...state,
                loadUsr: false,
                usersData: action.payload
            })

        case GET_USRS_ERROR:
            return ({
                ...state,
                loadUsr: false,
                error: action.payload
            })

        default:
            return state;
    }

}
export default userReducer;