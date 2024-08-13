import {combineReducers} from "@reduxjs/toolkit";
import {cartReducer} from "./slices/cartSlice";

export const rootReducer = combineReducers({
    cartReducer
});
export type RootState = ReturnType<typeof rootReducer>