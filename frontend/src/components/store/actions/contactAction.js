import { POST_CONTACT_START, POST_CONTACT_ERROR, POST_CONTACT_SUCCESS } from './actionTypes';
import { GET_CONTACTS_START, GET_CONTACTS_ERROR, GET_CONTACTS_SUCCESS } from './actionTypes';
import { DEL_CONTACT_START, DEL_CONTACT_ERROR, DEL_CONTACT_SUCCESS } from './actionTypes';

import axios from 'axios';

const delContactStart = () => ({ type: DEL_CONTACT_START });

const delContactSuccess = (res) => ({
    type: DEL_CONTACT_SUCCESS,
    payload: res
})

const delContactError = (err) => ({
    type: DEL_CONTACT_ERROR,
    payload: err
})

// export const delContact = (id) => {
//     return (dispatch => {
//         dispatch(delContactStart());
//         axios
//     })
// }

const getContactStart = () => {
    return ({ type: GET_CONTACTS_START })
}

const getContactError = (error) => {
    return ({
        type: GET_CONTACTS_ERROR,
        payload: error
    })
}

const getContactSuccess = (res) => {
    return ({
        type: GET_CONTACTS_SUCCESS,
        payload: res
    })
}

export const getContact = () => {
    return (dispatch => {
        dispatch(getContactStart());
        axios.get('/api/contacts')
            .then(
                res => dispatch(getContactSuccess(res.data))
            )
            .catch(
                err => dispatch(getContactError(err))
            )
    })
}

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
        dispatch(postContactStart());
        axios.post('/api/contacts', data)
            .then(res => {
                dispatch(postContactSuccess(res));
            })
            .catch(err => {
                console.log("in catch(err)");
                dispatch(postContactError(err));
            })
    });
}
