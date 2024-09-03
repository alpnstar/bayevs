import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/BASE_URL";
import {ApiResponse, Banner, Product} from "../../types/types";


export const bannersApi = createApi({
    reducerPath: 'banner',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`}), // правильный синтаксис baseQuery
    endpoints: (builder) => ({

        getBanners: builder.query<ApiResponse<Banner[]>, void>({
            query: () => `/banners`,
        })
    }),
});

export const {useGetBannersQuery} = bannersApi;