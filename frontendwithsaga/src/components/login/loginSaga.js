import { takeEvery, call, put } from 'redux-saga/effects'
import { AUTH_LOGIN, AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../../store/actionTypes';
import { USER_REGISTER, USER_REGISTER_START, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL} from '../../store/actionTypes';
import axios from 'axios'

function* workerLoginSaga(action) {
    yield put({ type: AUTH_START })
    const userData = yield call(loginapi, action.data)
    if (userData.status == 200)
        yield put({ type: AUTH_SUCCESS, userData })
    else
        yield put({ type: AUTH_FAIL, userData })
}

function* workerUsrRegister(action){
    yield put({type: USER_REGISTER_START})
    const userData = yield call(usrRegisterApi, action.data)
    if (userData.status == 200)
        yield put({ type: USER_REGISTER_SUCCESS, userData })
    else
        yield put({ type: USER_REGISTER_FAIL, userData })
}

export default function* watcherLoginSaga() {
    yield takeEvery(AUTH_LOGIN, workerLoginSaga)
    yield takeEvery(USER_REGISTER, workerUsrRegister)
}

const loginapi = data =>
    axios.post('/api/login', data)
        .then(res => res)
        .catch(err => err)

const usrRegisterApi = data =>
    axios.post('/api/register', data)
        .then(res => res)
        .catch(err => err)

