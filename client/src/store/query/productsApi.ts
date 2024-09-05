import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {ApiResponse, ApiResponseExtended, Product} from "../../types/types";
import {buildUrl, clearParams} from "../../utils/common";

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`}), // правильный синтаксис baseQuery
    endpoints: (builder) => ({
        getProductById: builder.query<ApiResponseExtended<Product>, string>({
            query: (id) => `/products/${id}`,  // используем id в качестве строки
        }),
        getProductsBySearch: builder.query<ApiResponseExtended<Product[]>, string>({
            query: (search = '') => buildUrl(`/products`, clearParams({
                'filter[name]': search,
            })),
        }),
        getProducts: builder.query<ApiResponse<Product[]>, void>({
            query: () => `/products`,
        }),
    }),
});

export const {useGetProductsQuery, useLazyGetProductByIdQuery, useLazyGetProductsBySearchQuery} = productsApi;