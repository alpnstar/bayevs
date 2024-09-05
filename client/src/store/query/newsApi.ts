import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {ApiResponse, ApiResponseExtended, News, Product} from "../../types/types";



export const newsApi = createApi({
    reducerPath: 'news',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`}), // правильный синтаксис baseQuery
    endpoints: (builder) => ({
        getNewsById: builder.query<ApiResponseExtended<News>, string>({
            query: (id) => `/news/${id}`,  // используем id в качестве строки
        }),
        getNews: builder.query<ApiResponse<News[]>, void>({
            query: () => `/news`,
        })
    }),
});

export const {useGetNewsQuery, useLazyGetNewsByIdQuery} = newsApi;