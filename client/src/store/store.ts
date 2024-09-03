import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {productsApi} from "./query/productsApi";
import {onChangeCart} from "./slices/cartSlice";
import {bannersApi} from "./query/bannersApi";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }).concat(bannersApi.middleware, productsApi.middleware, onChangeCart),
});


export default store;

