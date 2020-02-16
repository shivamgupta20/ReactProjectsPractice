import { POST_MULTI_CAST_START, POST_MULTI_CAST_SUCCESS, POST_MULTI_CAST_ERROR } from './actionTypes';
import axios from 'axios';

const postCastStart = () => ({ type: POST_MULTI_CAST_START })

const postCastSuccess = (res) => ({
    type: POST_MULTI_CAST_SUCCESS,
    payload: res
})

const postCastError = (err) => ({
    type: POST_MULTI_CAST_ERROR,
    payload: err
})

export const postCast = (data) => {
    return (dispatch => {
        dispatch(postCastStart())
        let data1 = [];
        const { movieId, contactId } = data;
        contactId.map(con => {
            data1.push({ movieId: movieId, contactId: con })
        })
        axios.post('/api/casts', data1)
            .then(res =>
                dispatch(postCastSuccess(res)))
            .catch(err =>
                dispatch(postCastError(err)))
    })
}