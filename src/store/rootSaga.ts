import {all,fork} from "redux-saga/effects"
import {songsSaga} from './songSaga'
import {statSaga} from './statSaga'

export function* rootSaga(){
    yield all([
        fork(songsSaga),
        fork(statSaga)
    ])
}