import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from './songSlice'
import { songsSaga } from "./songSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {songs:songReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
})
sagaMiddleware.run(songsSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch