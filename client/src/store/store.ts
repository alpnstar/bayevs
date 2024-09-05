import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {productsApi} from "./query/productsApi";
import {onChangeCart} from "./slices/cartSlice";
import {bannersApi} from "./query/bannersApi";
import {categoriesApi} from "./query/categoriesApi";
import {newsApi} from "./query/newsApi";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }).concat(categoriesApi.middleware,bannersApi.middleware, productsApi.middleware, newsApi.middleware, onChangeCart),
});


export default store;

