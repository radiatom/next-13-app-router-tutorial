"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const rootReducer = combineReducers({
    counterPage: reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
