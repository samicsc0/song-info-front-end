import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Stat } from "../types";

export interface StatState {
    data: Stat | undefined,
    loading: boolean,
    error: string | null
}
const initialState: StatState = {
    data: undefined,
    loading: false,
    error: null
}
const statSlice = createSlice({
    "name": "stat",
    initialState,
    reducers: {
        fetchStat(state) {
            state.loading = true
        },
        fetchStatSuccess(state, action: PayloadAction<Stat>) {
            state.data = action.payload
            state.loading = false
        },
        fetchStatError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        }
    }
})
export const { fetchStat, fetchStatError, fetchStatSuccess } = statSlice.actions
export default statSlice.reducer