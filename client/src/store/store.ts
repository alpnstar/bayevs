import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {onChangeCart} from "./slices/cartSlice";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(onChangeCart),
});


export default store;

