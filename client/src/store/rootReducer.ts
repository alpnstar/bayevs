import {combineReducers} from "@reduxjs/toolkit/react";
import {cartReducer} from "./slices/cartSlice";
import {productsApi} from "./query/productsApi";
import {bannersApi} from "./query/bannersApi";

export const rootReducer = combineReducers({
    cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [bannersApi.reducerPath]: bannersApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>