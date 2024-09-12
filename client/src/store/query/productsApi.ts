import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL, PRODUCTS_PER_PAGE} from "../../utils/CONSTS";
import {ApiResponse, ApiResponseExtended, ItemsApiParams, Product} from "../../types/types";
import {buildUrl, clearParams} from "../../utils/common";

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`}), // правильный синтаксис baseQuery
    endpoints: (builder) => ({
        getProductById: builder.query<ApiResponseExtended<Product>, string>({
            query: (id) => `/products/${id}`,  // используем id в качестве строки
        }),
        getProducts: builder.query<ApiResponseExtended<Product[]>, {
            params: ItemsApiParams,
        }>({
            query: (payload) => buildUrl(`/products`, clearParams({
                'pagination[per_page]': PRODUCTS_PER_PAGE,
                ...payload.params,
            })),
        }),
        getNewProducts: builder.query<ApiResponse<Product[]>, void>({
            query: () => buildUrl(`/products`, {
                'new': 1,
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetNewProductsQuery,
    useGetProductByIdQuery,
} = productsApi;