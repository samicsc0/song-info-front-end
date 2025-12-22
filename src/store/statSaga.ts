import { call,put, takeLatest } from "redux-saga/effects"
import {getStats} from "../api/song.api"
import type { ApiSuccess, Stat } from "../types"
import { fetchStat,fetchStatError, fetchStatSuccess } from "./statSlice"

function* fetchStatWorker(){
    try {
        const stats:ApiSuccess<Stat> = yield call(getStats) 
        yield put(fetchStatSuccess(stats.data))
    } catch (error) {
        let errorMessage = "Unknown error";
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === "string") {
            errorMessage = error;
        }
        yield put(fetchStatError(errorMessage))
    }
}
export function* statSaga(){
    yield takeLatest(fetchStat.type,fetchStatWorker)
}