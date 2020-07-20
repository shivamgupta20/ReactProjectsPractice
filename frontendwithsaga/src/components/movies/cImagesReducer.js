import { GET_CIMAGES_START, GET_CIMAGES_SUCCESS, GET_CIMAGES_ERROR } from '../../store/actionTypes'

const initialState = {
    cImagesData: "",
    loadcImages: false,
    cImagesError: "",
    cImages: []
}

export const cImagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CIMAGES_START:
            return ({
                ...state,
                loadcImages: true
            })

        case GET_CIMAGES_SUCCESS:
            return ({
                ...state,
                loadcImages: false,
                cImagesData: action.data,
                cImages: action.data.carouselImages.map(eachItem => eachItem.image)

            })

        case GET_CIMAGES_ERROR:
            return ({
                ...state,
                loadcImages: false,
                cImagesData: action.error
            })

        default:
            return state
    }
}