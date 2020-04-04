import { spawn, takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import watcherLoginSaga from '../components/login/loginSaga'

// const api = data => {
//     axios.post('/api/login', data)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }

// function* authLogin(action) {
//     yield call(api, action.data)

//     // return (dispatch => {
//     //     dispatch(authStart());
//     //     axios.post('/api/login', { email: email, password: pass })
//     //         .then(res => {
//     //             dispatch(authSuccess(res));
//     //         })
//     //         .catch(err => {
//     //             dispatch(authFail(err));
//     //            })
//     // })
// }

export default function* mySaga() {
    // yield takeEvery('AUTH_LOGIN', authLogin)
    yield spawn(watcherLoginSaga)
}

// export default mySaga;