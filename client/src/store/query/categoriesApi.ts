import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {ApiResponse, ApiResponseExtended, Category, Product} from "../../types/types";
import {buildUrl, clearParams} from "../../utils/common";

export const categoriesApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`}), // правильный синтаксис baseQuery
    endpoints: (builder) => ({
        getCategories: builder.query<ApiResponse<Category[]>, void>({
            query: () => `/categories`,
        }),
        getCategoryProducts: builder.query<ApiResponseExtended<Product[]>, {
            id: string,
            params?: {
                'filter[season]'?: string,
                'pagination[per_page]'?: number,
            }
        }>({
            query: ({id, params = {}}) => buildUrl(`/category/${id}/products`, clearParams(params)),
        }),
    }),
});

export const {useGetCategoriesQuery, useLazyGetCategoryProductsQuery} = categoriesApi;