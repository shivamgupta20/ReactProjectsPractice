import { spawn } from 'redux-saga/effects'
import watcherLoginSaga from '../components/login/loginSaga'
import watcherMoviesSaga from '../components/movies/moviesSaga'
import watchercImagesSaga from '../components/movies/cImagesSaga';

export default function* mySaga() {
    yield spawn(watcherLoginSaga)
    yield spawn(watcherMoviesSaga)
    yield spawn(watchercImagesSaga)

}