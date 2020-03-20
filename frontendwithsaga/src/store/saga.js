import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

const api = data => {
    axios.post('/api/login', data)
        .then(res => { console.log(res) })
        .catch(err => console.log(err))
}


function* authLogin(action) {
    yield call(api, action.data)



    // return (dispatch => {
    //     dispatch(authStart());
    //     axios.post('/api/login', { email: email, password: pass })
    //         .then(res => {
    //             dispatch(authSuccess(res));
    //         })
    //         .catch(err => {
    //             dispatch(authFail(err));
    //            })
    // })
}

function* mySaga() {
    yield takeEvery('AUTH_LOGIN', authLogin)
}

export default mySaga;