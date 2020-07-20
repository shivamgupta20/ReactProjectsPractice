import { takeEvery, put, call } from 'redux-saga/effects'
import axios from 'axios'
import {
    // GET_MOVIE, GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR,
    GET_MOVIES, GET_MOVIES_START, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR,
} from '../../store/actionTypes'


function* workerMoviesSaga(action) {
    yield put({ type: GET_MOVIES_START })
    const moviesData = yield call(moviesapi)
    if (moviesData.status === 200)
        yield put({ type: GET_MOVIES_SUCCESS, data: moviesData })
    else
        yield put({ type: GET_MOVIES_ERROR, data: moviesData })
}

export default function* watcherMoviesSaga() {
    yield takeEvery(GET_MOVIES, workerMoviesSaga)
}

const moviesapi = () => axios.get('/api/movies')