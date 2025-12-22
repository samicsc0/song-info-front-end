import {call,put,takeLatest} from "redux-saga/effects"
import {fetchSongs,fetchSongsError,fetchSongsSuccess} from "./songSlice"
import type { Song } from "../types/song";
import { getAllSongs } from "../api/song.api";
import type { ApiSuccess } from "../types";

function* fetchSongsWorker(){
    try {
        const songs:ApiSuccess<Song[]>= yield call(getAllSongs);
        yield put(fetchSongsSuccess(songs.data));
    } catch (error) {
        let errorMessage = "Unknown error";
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === "string") {
            errorMessage = error;
        }
        yield put(fetchSongsError(errorMessage));
    }
}
export function* songsSaga() {
    yield takeLatest(fetchSongs.type, fetchSongsWorker)
}