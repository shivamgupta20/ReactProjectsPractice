import { POST_CONTACT_START, POST_CONTACT_ERROR, POST_CONTACT_SUCCESS } from './actionTypes';
import axios from 'axios';

const postContactStart = () => {
    return ({
        type: POST_CONTACT_START
    });
}

const postContactSuccess = (res) => {
    return ({
        type: POST_CONTACT_SUCCESS,
        payload: res
    });
}

const postContactError = (error) => {
    return ({
        type: POST_CONTACT_ERROR,
        payload: error
    });
}

export const postContact = (data) => {
    return (dispatch => {
        dispatch(postContactStart);
        console.log("after postContactStart");
        axios.post('/api/contacts', data)
            .then(res => {
                console.log("in then(res)");
                dispatch(postContactSuccess(res));
            })
            .catch(err => {
                console.log("in catch(err)");
                dispatch(postContactError(err));
            })
    });
}