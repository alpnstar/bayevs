import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL, NEWS_PER_PAGE} from "../../utils/CONSTS";
import {ApiResponse, ApiResponseExtended, ItemsApiParams, News} from "../../types/types";
import {buildUrl, clearParams} from "../../utils/common";


export const newsApi = createApi({
    reducerPath: 'news',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`}), // правильный синтаксис baseQuery
    endpoints: (builder) => ({
        getNewsById: builder.query<ApiResponseExtended<News>, string>({
            query: (id) => `/news/${id}`,  // используем id в качестве строки
        }),
        getNews: builder.query<ApiResponse<News[]>, {params: ItemsApiParams}>({
            query: ({params}) => buildUrl(`/news`, clearParams({
                'pagination[per_page]': NEWS_PER_PAGE,
                ...params,
            })),
        })
    }),
});

export const {useGetNewsQuery, useLazyGetNewsByIdQuery} = newsApi;