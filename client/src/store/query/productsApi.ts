import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {ApiResponse, Product} from "../../types/types";

interface Category {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
}

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`}), // правильный синтаксис baseQuery
    endpoints: (builder) => ({
        getProductById: builder.query<any, string>({
            query: (id) => `/products/${id}`,  // используем id в качестве строки
        }),
        getProducts: builder.query<ApiResponse<Product[]>, void>({
            query: () => `/products`,
        })
    }),
});

export const {useGetProductsQuery, useLazyGetProductByIdQuery} = productsApi;