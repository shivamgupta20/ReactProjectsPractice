import { GET_CIMAGES_START, GET_CIMAGES_SUCCESS, GET_CIMAGES_ERROR } from '../actions/actionTypes';
import { POST_CIMAGES_START, POST_CIMAGES_SUCCESS, POST_CIMAGES_ERROR } from '../actions/actionTypes';

const initialState = {
    cImagesData: "",
    cImageData: "",
    loadCI: false,
    error: null
}

const CImagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CIMAGES_START:
            return ({
                ...state,
                loadCI: true
            })
        case GET_CIMAGES_SUCCESS:
            return ({
                ...state,
                loadCI: false,
                cImagesData: action.payload
            })

        case GET_CIMAGES_ERROR:
            return ({
                ...state,
                loadCI: false,
                error: action.payload
            })

        case POST_CIMAGES_START:
            return ({
                ...state,
                loadCI: true
            })

        case POST_CIMAGES_SUCCESS:
            return ({
                ...state,
                loadCI: false,
                cImageData: action.payload
            })

        case POST_CIMAGES_ERROR:
            return ({
                ...state,
                loadCI: false,
                error: action.payload
            })

        default: return state;
    }
}

export default CImagesReducer;