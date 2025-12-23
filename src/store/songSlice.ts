import { createSlice } from '@reduxjs/toolkit'
import type { Song } from '../types/song'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SongState {
    data: Song[],
    loading: boolean,
    error: string | null
}

const initialState: SongState = {
    data: [],
    loading: false,
    error: null
}

const songSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        fetchSongs(state) {
            state.loading = true
            state.error = null
        },
        fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
            state.loading = false
            state.data = action.payload
        },
        fetchSongsError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        addSong(state,_action:PayloadAction<Song>){
            state.loading = true
        },
        addSongSuccess(state,action:PayloadAction<Song>){
            state.loading = false
            state.data.push(action.payload)
        },
        addSongError(state,action:PayloadAction<string>){
            state.loading = false
            state.error = action.payload
        }
    }
})
export const { fetchSongs, fetchSongsError, fetchSongsSuccess,addSong,addSongError,addSongSuccess } = songSlice.actions
export default songSlice.reducer 