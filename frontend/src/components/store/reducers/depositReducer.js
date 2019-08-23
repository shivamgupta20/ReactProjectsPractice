import { GET_DEPS_START, GET_DEPS_SUCCESS, GET_DEPS_ERROR, POST_DEP_SUCCESS, POST_DEP_ERROR } from '../actions/actionTypes';
import { GET_DEP_SUCCESS, GET_DEP_ERROR, GET_DEP_START, PUT_DEP_START, PUT_DEP_SUCCESS, PUT_DEP_ERROR } from '../actions/actionTypes';

const initialState = {
    depositsData: "",
    depositData: "",
    loadDeps: false,
    error: null
}

const depositReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DEPS_START:
            return {
                ...state,
                loadDeps: true
            }
        case PUT_DEP_START:
            return {
                ...state,
                loadDeps: true
            }

        case PUT_DEP_SUCCESS:
            return {
                ...state,
                loadDeps: false
            }

        case PUT_DEP_ERROR:
            return {
                ...state,
                error: action.error
            }

        case GET_DEP_START:
            return {
                ...state,
                loadDeps: true
            }
        case GET_DEPS_SUCCESS:
            return {
                ...state,
                depositsData: action.payload,
                loadDeps: false
            }
        case GET_DEP_SUCCESS:
            return {
                ...state,
                depositData: action.payload,
                loadDeps: false
            }
        case GET_DEPS_ERROR:
            return {
                ...state,
                error: action.payload,
                loadDeps: false
            }
        case GET_DEP_ERROR:
            return {
                ...state,
                error: action.payload,
                loadDeps: false
            }

        case POST_DEP_SUCCESS:
            return {
                ...state,
                depositsData: action.payload
            }

        case POST_DEP_ERROR:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}

export default depositReducer;