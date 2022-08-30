import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import btnReducer from "./reducers/btnState/btnSlice";

const rootReducer = combineReducers({
    btnReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer
})