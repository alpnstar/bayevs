import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {ApiResponse, Category} from "../../types/types";

export const categoriesApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`}), // правильный синтаксис baseQuery
    endpoints: (builder) => ({
        getCategories: builder.query<ApiResponse<Category[]>, void>({
            query: () => `/categories`,
        }),
        getCategoryProducts: builder.query<ApiResponse<Category[]>, string>({
            query: (id) => `/category/${id}/products`,
        }),
    }),
});

export const {useGetCategoriesQuery, useLazyGetCategoryProductsQuery} = categoriesApi;