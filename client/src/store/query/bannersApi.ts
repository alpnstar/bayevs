import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/CONSTS";
import {ApiResponse, Banner} from "../../types/types";
import {RootState} from "../rootReducer";


export const bannersApi = createApi({
    reducerPath: 'banner',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/api`,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            return headers;
        }
    }),
    endpoints: (builder) => ({

        getBanners: builder.query<ApiResponse<Banner[]>, void>({
            query: () => `/banners`,
        })
    }),
});

export const {useGetBannersQuery} = bannersApi;