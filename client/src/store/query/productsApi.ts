import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {buildUrl, clearParams} from "../../utils/common";


let BASE_URL;
export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery(({baseUrl: BASE_URL + '/categories'})),
    endpoints: (builder) => ({
        getProductsById: builder.query({
            query: (id) => id,
        }),
        getProducts: builder.query({
            query: () => '',
        }),
        getProductsByCategory: builder.query({
            query: (data) => buildUrl(
                '',
                clearParams(data.params, [])
            )
        })
    })
})

// export const categoriesApi = createApi({
//     reducerPath: 'categories',
//     baseQuery: fetchBaseQuery(({baseUrl: BASE_URL + '/categories'})),
//     endpoints: (builder) => ({
//         getCategoryById: builder.query({
//             query: (id) => id,
//         }),
//         getCategories: builder.query({
//             query: () => '',
//         }),
//         getCategoryProducts: builder.query({
//             query: (data) => buildUrl(
//                 data.id + '/products',
//                 clearParams(data.params, ['offset', 'limit'])
//             )
//         })
//     })
// })
// export const {useGetCategoryByIdQuery, useGetCategoriesQuery, useGetCategoryProductsQuery} = categoriesApi;
//
// //store
// export const store = configureStore({
//     reducer: {
//         user: userReducer,
//         [productsApi.reducerPath]: productsApi.reducer,
//         [categoriesApi.reducerPath]: categoriesApi.reducer
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware()
//             .concat(
//                 productsApi.middleware,
//                 categoriesApi.middleware
//             )
// })