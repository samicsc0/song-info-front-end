import {call,put,takeLatest} from "redux-saga/effects"
import {fetchSongs,fetchSongsError,fetchSongsSuccess, addSong,addSongError,addSongSuccess} from "./songSlice"
import type { Song } from "../types/song";
import { getAllSongs,addSong as addSongApi } from "../api/song.api";
import type { ApiSuccess } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";

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
function* addSongWorker(action:PayloadAction<Song>){
    try{
        const song: ApiSuccess<Song> = yield call(addSongApi,action.payload)
        yield put(addSongSuccess({...song.data}))
    }catch(error){
        let errorMessage = "Unknown error";
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === "string") {
            errorMessage = error;
        }
        yield put(addSongError(errorMessage))
    }
}
export function* songsSaga() {
    yield takeLatest(fetchSongs.type, fetchSongsWorker)
    yield takeLatest(addSong.type,addSongWorker)
}