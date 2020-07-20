import { takeEvery, put, call } from 'redux-saga/effects'
import axios from 'axios'
import { GET_CIMAGES, GET_CIMAGES_START, GET_CIMAGES_SUCCESS, GET_CIMAGES_ERROR } from '../../store/actionTypes'

async function cImagesApi(category) {
    let res = await axios.get('/api/cimages', category);
    let data = res.data;
    return data
}

function* workerGetCimages(action) {
    var cImagesdata = ""

    yield put({ type: GET_CIMAGES_START })
    yield call(getData)
    if (cImagesdata.ok === true) {
        yield put({ type: GET_CIMAGES_SUCCESS, data: cImagesdata })
    }
    else
        yield put({ type: GET_CIMAGES_ERROR, error: cImagesdata })

    async function getData() {
        cImagesdata = await cImagesApi(action.data)
    }
}

export default function* watchercImagesSaga() {
    yield takeEvery(GET_CIMAGES, workerGetCimages)
}