import {combineReducers} from "@reduxjs/toolkit/react";
import {cartReducer} from "./slices/cartSlice";
import {productsApi} from "./query/productsApi";
import {bannersApi} from "./query/bannersApi";
import {categoriesApi} from "./query/categoriesApi";
import {newsApi} from "./query/newsApi";
import {userReducer} from "./slices/userSlice";
import {ordersApi} from "./query/ordersApi";

export const rootReducer = combineReducers({
    cartReducer,
    userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [bannersApi.reducerPath]: bannersApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>